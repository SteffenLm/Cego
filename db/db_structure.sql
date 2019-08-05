CREATE DATABASE cego;
USE cego;

CREATE TABLE user(
	uid INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    email VARCHAR(60) UNIQUE,
    jwtkey varchar(32)
);