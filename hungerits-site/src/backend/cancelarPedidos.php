<?php
require_once 'include.php';
$pdo = getDatabase();

if (!isset($_POST['ids'])) {
    echo toJson(['error' => 'valores invalidos']);
    exit;
}

$ids = json_decode($_POST['ids'], true);

try {
    $id_placeholders = implode(',', array_fill(0, count($ids), '?'));
    $stmt = $pdo->prepare("UPDATE pedido_cliente SET status = 'cancelado' WHERE id IN ($id_placeholders) AND status = 'pendente'");
    $stmt->execute($ids);

    if ($stmt->rowCount() > 0) {
        echo toJson(['success' => 'Pedidos pendentes cancelados com sucesso']);
    } else {
        echo toJson(['info' => 'Nenhum pedido foi cancelado.']);
    }
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
    exit;
}


echo toJson(['error' => 'end line']);
exit;
?>