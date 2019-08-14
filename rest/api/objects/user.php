<?php
    require './../vendor/autoload.php';
    require './core/database.php';

    use \Firebase\JWT\JWT;

    class User
    {
        private $connection;
        private $tablename = 'user';

        public function __construct() {
            $db = new Database();
            $this->connection = $db->connection;
        }

        private function userExists($username) {
            $stmt = $this->connection->prepare("SELECT count(*) FROM " . $this->tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            return $row[0] === 1 ? true: false;
        }

        private function checkCredentials($username, $password) {
            $stmt = $this->connection->prepare("SELECT username, password FROM " . $this->tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            $queriedPassword = $row["password"];
            $hashedpassword = $this->hashPassword($password);
            return ($queriedPassword === $hashedpassword);
        }

        private function hashPassword($password) {
            return strtoupper(hash('sha256', $password));
        }

        public function generateToken($username, $password) {
            if ($this->userExists($username) && $this->checkCredentials($username, $password)) {
                $key = $this->saveKeyToUser($username);
                $token = array(
                    "username" => $username
                );
                return JWT::encode($token, $key);
            } else {
                return false;
            }
        }

        private function getKeyOfUser($username) {
            $stmt = $this->connection->prepare("SELECT jwtkey FROM " . $this->tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            return $row["jwtkey"];
        }

        private function saveKeyToUser($username) {
            $key = bin2hex(random_bytes(16));
            $stmt = $this->connection->prepare("UPDATE " . $this->tablename . " SET jwtkey = ? WHERE username = ?");
            $stmt->bind_param("ss", $key, $username);
            $stmt->execute();
            return $key;
        }
}
?>
