<?php
    class JSON {
        public static function setHeaders($allowedMethods) {
            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json");
            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
            header(self::getAccessControlAllowMethods($allowedMethods));
        }

        private static function getAccessControlAllowMethods($methods) {
            $methodsstring = "Access-Control-Allow-Methods: ";
            for ($i=0; $i < count($methods); $i++) {
                if ($i == (count($methods) - 1)) {
                    $methodsstring .= $methods[$i];
                } else {
                    $methodsstring .= $methods[$i] . ", ";
                }
            }
            return $methodsstring;
        }

        public static function getBody() {
            return json_decode(file_get_contents("php://input"), false);
        }
    }
?>