<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "bdgfa";
$port = 3306;

try {
 $conn = new PDO("mysql:host=$host;port=$port;dbname=" . $dbname, $user, $password);
   // echo "conectado";
}
catch (Exception $ex){
    echo "não conectado";
}



?>