<?php
require './core/database.php';
require './objects/user.php';


header("Access-Control-Allow-Origin: http://localhost/rest/api/login.php");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$reqbody = json_decode(file_get_contents('php://input'), true);
$reqUsername = $reqbody["username"];
$reqPassword = $reqbody["password"];

if (userExists($reqUsername) && userAuthenticated($reqUsername, $reqPassword)) {    
    $jwt = generateToken($reqUsername);
    http_response_code(200);
    $resp = [ "jwt" => $jwt];
    echo json_encode($resp);
} else {
    http_response_code(401);
    echo json_encode("");
}
