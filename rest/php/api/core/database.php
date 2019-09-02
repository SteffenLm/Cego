<?php
    class Database {
        
        public static function getConnection() {
            $db_host = 'rdbms.strato.de';
            $db_username = 'U3840555';
            $db_passwort = '1VbrSrG5YZgAPSxYG4C78PFsl7AAuCPpX6o6UUjZVPtfKBy2kxKcyqTmwibj';
            $db_name = 'DB3840555';
            return mysqli_connect($db_host, $db_username, $db_passwort, $db_name);
        }
    }
?>