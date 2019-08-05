<?php
require './../vendor/autoload.php';
use \Firebase\JWT\JWT;

function userExists($username)
{
    global $con;
    $stmt = $con->prepare("SELECT count(*) FROM user WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $res = $stmt->get_result();
    $row = $res->fetch_array();
    return $row[0] === 1 ? true: false;
}

function userAuthenticated($username, $password)
{
    global $con;
    $stmt = $con->prepare("SELECT username, password FROM user WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $res = $stmt->get_result();
    $row = $res->fetch_array();
    $qpassword = $row["password"];
    $hashedpassword = strtoupper(hash('sha256', $password));
    if ($qpassword === $hashedpassword) {
        return true;
    } else {
        return false;
    }
}

function generateToken($username) {
    $uid = 1; // TODO query userid of username;
    $key = bin2hex(random_bytes(16)); //Generate pseudo secret
    var_dump($key);
    $token = array(
        "uid" => $uid
    );
    saveKeyToUser($username, $key);
    return JWT::encode($token, $key);
}

function saveKeyToUser($username, $key) {
    global $con;
    $stmt = $con->prepare("UPDATE user SET jwtkey = ? WHERE username = ?");
    $stmt->bind_param("ss", $key, $username);
    $stmt->execute();
}
