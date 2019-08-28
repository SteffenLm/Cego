<?php
    class Database {
        
        public static function getConnection() {
            $db_host = 'localhost';
            $db_username = 'root';
            $db_passwort = '';
            $db_name = 'cego';
            return mysqli_connect($db_host, $db_username, $db_passwort, $db_name);
        }
    }
?>