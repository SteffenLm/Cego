<?php
    class Authentication {
        
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
    }
?>
