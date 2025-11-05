<?php
require_once 'include.php';
$pdo = getDatabase();


if (!isset($_POST['credenciais'])) {
    echo toJson(['error' => 'valores invalidos']);
    exit;
}

$cred = json_decode($_POST['credenciais'], true);
$login = $cred['login'];
$senha = $cred['senha'];

try {
    $stmt = $pdo->prepare("select id, nome, email, admin from usuario where nome = ? and senha = ?");
    $stmt->execute([$login, $senha]);
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($stmt->rowCount() > 0) {
        echo toJson(['success' => 'Login realizado com sucesso', 'data' => $res]);
    } else {
        echo toJson(['info' => 'Credenciais inválidas.']);
    }
    exit;
} catch (PDOException $e) {
    echo toJson(['error' => 'Query failed: ' . $e->getMessage()]);
    exit;
}


echo toJson(['error' => 'end line']);
exit;
?>