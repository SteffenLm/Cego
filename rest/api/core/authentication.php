<?php
    require_once "./../vendor/autoload.php";
    require_once './core/database.php';

    use \Firebase\JWT\JWT;

    class Authentication {

        public static $tablename = "users";
        private static $connection = null;

        public static function Init() {
            if (self::$connection == null) {
                self::$connection = Database::getConnection();
            }
        }

        public static function tokenIsValid() {
            if (isset(apache_request_headers()["authorization"])) {
                try {
                    $authvalue = apache_request_headers()["authorization"];
                    $token = substr($authvalue, 7);
                    list($header, $payload, $signature) = explode (".", $token);
                    $reqPayload =  json_decode(base64_decode($payload));
                    $key = self::getKeyOfUser($reqPayload->username);
                    $decoded = JWT::decode($token, $key, array('HS256'));
                    $GLOBALS['username'] = $reqPayload->username;
                } catch (Exception $e) {
                    http_response_code(401);
                    exit();     
                }
            } else {
                http_response_code(401);
                exit();
            }
        }

        public static function saveKeyToUser($username) {
            $key = bin2hex(random_bytes(16));
            $stmt = self::$connection->prepare("UPDATE " . self::$tablename . " SET jwtkey = ? WHERE username = ?");
            $stmt->bind_param("ss", $key, $username);
            $stmt->execute();
            return $key;
        }

        private function getKeyOfUser($username) {
            $stmt = self::$connection->prepare("SELECT jwtkey FROM " . self::$tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            return $row["jwtkey"];
        }

        public static function hashPassword($password) {
            return strtoupper(hash('sha256', $password));
        }

        public static function userExists($username) {
            $stmt = self::$connection->prepare("SELECT count(*) FROM " . self::$tablename . " WHERE username = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            return $row[0] === 1 ? true: false;
        }

        public static function checkCredentials($username, $password) {
            $sql = "SELECT username, password FROM " . self::$tablename . " WHERE username = ?";
            $stmt = self::$connection->prepare($sql);
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $res = $stmt->get_result();
            $row = $res->fetch_array();
            $queriedPassword = $row["password"];
            $hashedpassword = self::hashPassword($password);
            return ($queriedPassword === $hashedpassword);
        }

        public static function generateToken($username, $password) {
            if (self::userExists($username) && self::checkCredentials($username, $password)) {
                $key = self::saveKeyToUser($username);
                $token = array(
                    "username" => $username
                );
                return JWT::encode($token, $key);
            } else {
                return false;
            }
        }
    }
    Authentication::Init();
?>