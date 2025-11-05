<?php
require_once 'include.php';
$pdo = getDatabase();

try {
    $stmt = $pdo->query("SELECT pc.id as pedido_num, pc.status as pedido_status, p.nome as prato_nome, mesa_id as mesa_id, u.nome as cliente_nome, pc.preco as valor
    from pedido_cliente pc
    join usuario u on u.id = pc.usuario_id
    join prato p on p.id = prato_id;");
    $pedidos = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo toJson(['pedidos_andamentos' => $pedidos]);
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
}


echo toJson(['error' => 'end line']);
exit;
?>