<?php

require_once "./core/json.php";
require_once "./objects/login.php";

$allowedMethods = ["POST"];
JSON::setHeaders($allowedMethods);

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = substr($uri, 5);
$uri = str_replace(".php", "", $uri);
$uri = explode( "/", $uri );
if ($uri[0] === "login") {
    switch ($_SERVER["REQUEST_METHOD"]) {
        case "POST":
            Login::POST();
            break;    
        default:
            http_response_code(405);
            exit();
            break;
    }
} else {
    http_response_code(405);
    exit();
}
