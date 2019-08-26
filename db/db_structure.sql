CREATE DATABASE cego;
USE cego;

CREATE TABLE users(
	uid INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    email VARCHAR(60) UNIQUE,
    jwtkey varchar(32)
);

CREATE TABLE games(
    gid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    created DATETIME  DEFAULT CURRENT_TIMESTAMP,
    playerOne INT NOT NULL,
    playerTwo INT NOT NULL,
    playerThree INT NOT NULL,
    playerFour INT NOT NULL,
    FOREIGN KEY (playerOne) REFERENCES users (uid),
    FOREIGN KEY (playerTwo) REFERENCES users (uid),
    FOREIGN KEY (playerThree) REFERENCES users (uid),
    FOREIGN KEY (playerFour) REFERENCES users (uid),
    CONSTRAINT CHK_Players CHECK (
        playerOne != playerTwo AND
        playerOne != playerThree AND
        playerOne != playerFour AND
        playerTwo != playerThree AND 
        playerTwo != playerFour AND
        playerThree != playerFour)
);

