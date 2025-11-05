<template>
    <div>
        <h1>Hungerits</h1>
        <button @click="$router.push({name: 'cardapio'})" class="btn">Ver Cardapio</button>
        <button @click="$router.push({name: 'pedidos-andamento'})" class="btn">Ver Pedidos em Andamento</button>
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

button {
    background-color: transparent;
    border: none;
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
    border: none;
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