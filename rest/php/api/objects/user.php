<?php
    require_once './../vendor/autoload.php';
    require_once "./core/authentication.php";

    use \Firebase\JWT\JWT;

    class User {
        private $connection = null;
        private static $tablename = 'users';

        private $uid = null;
        private $username = null;
        private $password = null;
        private $email = null;
        private $jwtkey = null;
        
        public function __construct($username = '') {
            $this->connection = Database::getConnection();
            if ($username !== '') {
                $this->getUserData($username);
            }
        }

        public function getUid() {
            return $this->uid;
        }

        public function getUsername() {
            return $this->username;
        }

        public function setUsername($username) {
            $this->getUserData($username);
        }

        public function getPassword() {
            return $this->password;
        }

        public function getEmail() {
            return $this->email;
        }

        public function getJWT() {
            return $this->jwtkey;
        }

        private function getUserData($username) {
            $stmt = $this->connection->prepare("SELECT * FROM " . self::$tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_assoc();
            $this->uid = $row["uid"];
            $this->username = $row["username"];
            $this->password = $row["password"];
            $this->email = $row["email"];
            $this->jwtkey = $row["jwtkey"];
        }
    }
?>
