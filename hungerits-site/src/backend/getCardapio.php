<?php
require_once 'include.php';
$pdo = getDatabase();

try {
    $stmt = $pdo->query("SELECT id, nome, preco FROM prato");
    $cardapio = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo toJson(['cardapio' => $cardapio]);
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
}

echo toJson(['error' => 'end line']);
exit;
?>