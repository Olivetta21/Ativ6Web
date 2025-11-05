<?php
require_once 'include.php';
$pdo = getDatabase();


if (!isset($_POST['usuario_id']) || !isset($_POST['pratos'])) {
    echo toJson(['error' => 'valores invalidos']);
    exit;
}

$uid = json_decode($_POST['usuario_id'], true);
$pratos = json_decode($_POST['pratos'], true);

try {
    $values_placeholder = rtrim(str_repeat('(?, ?, ?, ?), ', count($pratos)), ', ');
    $valores = [];
    foreach ($pratos as $prato) {
        $valores[] = $uid;
        $valores[] = $prato['id'];
        $valores[] = $prato['mesa_id'];
        $valores[] = $prato['preco'];
    }

    $stmt = $pdo->prepare("INSERT INTO pedido_cliente (usuario_id, prato_id, mesa_id, preco) VALUES " . $values_placeholder);
    $stmt->execute($valores);

    if ($stmt->rowCount() > 0) {
        echo toJson(['success' => 'Pedido realizado com sucesso']);
    } else {
        echo toJson(['info' => 'Nenhum pedido foi realizado.']);
    }
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
    exit;
}


echo toJson(['error' => 'end line']);
exit;
?>