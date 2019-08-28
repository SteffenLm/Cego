<?php

    require_once "./core/json.php";
    require_once "./core/authentication.php";

    class Login {

        public static function POST() {
            $body = JSON::getBody();
            if ($jwt = Authentication::generateToken($body->username, $body->password)) {    
                http_response_code(200);
                $resp = [ "jwt" => $jwt];
                echo json_encode($resp);
            } else {
                http_response_code(401);
            }
        }
    }
?>