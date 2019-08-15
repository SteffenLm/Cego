<?php
    class JSON {
        public function setHeader() {
            header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
            header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
            header("Content-Type: application/json");
        }
    }

?>