<?php
    class Database
    {
        public $connection;

        public function __construct() {
            $db_host = 'localhost';
            $db_username = 'root';
            $db_passwort = '';
            $db_name = 'cego';
            $this->connection = mysqli_connect($db_host, $db_username, $db_passwort, $db_name);
        }
    }
?>