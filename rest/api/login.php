<?php
require './objects/user.php';
require './core/json.php';

$json = new JSON();
$json->setHeader();

$reqbody = json_decode(file_get_contents('php://input'), true);
$reqUsername = $reqbody["username"];
$reqPassword = $reqbody["password"];

$user = new User();
if ($jwt = $user->generateToken($reqUsername, $reqPassword)) {    
    http_response_code(200);
    $resp = [ "jwt" => $jwt];
    echo json_encode($resp);
} else {
    http_response_code(401);
    echo json_encode("");
}
