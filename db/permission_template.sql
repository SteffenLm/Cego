CREATE USER cego_db_user@localhost IDENTIFIED BY 'PW';
CREATE DATABASE cego_db;
GRANT ALL PRIVILEGES on cego_db.* to cego_db_user@localhost;
FLUSH privileges;
exit;
