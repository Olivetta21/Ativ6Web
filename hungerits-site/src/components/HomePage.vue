<template>
    <div>
        <h1>Hungerits</h1>
        <a href="Cardapio.html" class="btn">Ver Cardapio</a>
        <a href="Pedidos_andamento.html" class="btn">Ver Pedidos em Andamento</a>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: 'Inter', sans-serif;
}

h1 {
    font-family: 'Lobster', cursive;
    font-size: 45px;
    font-weight: regular;
    margin: 0;
    padding: 0;
}

.btn {
    display: inline-block;
    background-color: #EF2A39;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>