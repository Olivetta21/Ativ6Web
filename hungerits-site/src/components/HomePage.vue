<template>
    <div class="home-page">
        <div>
            <button @click="$router.push({name: 'cardapio'})" class="btn">Ver Cardapio</button>
            <button @click="$router.push({name: 'pedidos-andamento'})" class="btn">Ver Pedidos em Andamento</button>
        </div>
    </div>
</template>

<style scoped>

.home-page {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 30px;
}
</style>