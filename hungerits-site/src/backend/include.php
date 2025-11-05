<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");



function toJson($data) {
    $result = [];
    
    if (is_array($data)) {
        foreach ($data as $key => $value) {
            $result[$key] = mb_convert_encoding($value, 'UTF-8', 'auto');
        }
    }

    return json_encode($result);
}

function getDatabase() {
    $host = 'localhost';
    $db   = 'hungerits';
    $user = 'postgres';
    $pass = '1234';

    $dsn = "pgsql:host=$host;port=5432;dbname=$db;";
    try {
        $pdo = new PDO($dsn, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
        return $pdo;
    } catch (PDOException $e) {
        echo toJson(['error' => 'Database connection failed: ' . $e->getMessage()]);
        exit;
    }
}


?>