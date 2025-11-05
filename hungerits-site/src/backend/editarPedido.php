<?php
require_once 'include.php';
$pdo = getDatabase();


if (!isset($_POST['pedido'])) {
    echo toJson(['error' => 'valores invalidos']);
    exit;
}

$pedido = json_decode($_POST['pedido'], true);
$id = $pedido['id'];
$status = $pedido['status'];
$prato_id = $pedido['prato_id'];
$mesa_id = $pedido['mesa_id'];
$usuario_id = $pedido['usuario_id'];
$preco = $pedido['preco'];

try {
    $stmt = $pdo->prepare("UPDATE pedido_cliente SET status = ?, prato_id = ?, mesa_id = ?, usuario_id = ?, preco = ? WHERE id = ?");
    $stmt->execute([$status, $prato_id, $mesa_id, $usuario_id, $preco, $id]);

    if ($stmt->rowCount() > 0) {
        echo toJson(['success' => 'Pedido editado com sucesso']);
    } else {
        echo toJson(['info' => 'Nenhum pedido foi editado.']);
    }
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
    exit;
}


echo toJson(['error' => 'end line']);
exit;
?>