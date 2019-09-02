<?php
require_once "./core/authentication.php";
require_once "./core/json.php";
require "./objects/game.php";


Authentication::tokenIsValid();
$allowedMethods = ["GET"];
JSON::setHeaders($allowedMethods);

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = substr($uri, 5);
$uri = str_replace(".php", "", $uri);
$uri = explode( "/", $uri );
if ($uri[0] === "games") {
    switch ($_SERVER["REQUEST_METHOD"]) {
        case "GET":
            if (isset($uri[1])) {
                Game::getGameById($uri[1]);  
            } else {
                Game::getGamesByUserId();
            }
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
?>
