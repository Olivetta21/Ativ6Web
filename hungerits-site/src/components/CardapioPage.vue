<template>
    <div>
        <header class="header">
            <a href="Home.html" class="back-button">
            <i class="fas fa-arrow-left"></i>
            </a>
            <h1 class="logo">Hungerits</h1>
        </header>
    
        <nav class="nav-menu">
            <a class="nav-item">Tudo</a>
            <a class="nav-item">Lanches</a>
            <a class="nav-item">Bebidas</a>
            <a class="nav-item">Combos</a>
        </nav>

        <div class="products-grid">
            <div class="product-card">
                <img src="imagem do produto" alt="foto lanche aqui" class="imagem do produto">
                <h3 class="titulo do produto">Nome do Lanche Aqui</h3>
                <div class="estrelas avaliacao">
                    <span class="star">★</span>
                    <span class="nota">4.9</span>
                </div>
                <button class="add-button">+</button>
            </div>
            
            <div class="product-card">
                <img src="imagem do produto" alt="foto lanche aqui" class="imagem do produto">
                <h3 class="titulo do produto">Nome do Lanche Aqui</h3>
                <div class="estrelas avaliacao">
                    <span class="star">★</span>
                    <span class="nota">4.8</span>
                </div>
                <button class="add-button">+</button>
            </div>

            <div class="product-card">
                <img src="imagem do produto" alt="foto lanche aqui" class="imagem do produto">
                <h3 class="titulo do produto">Nome do Lanche Aqui</h3>
                <div class="estrelas avaliacao">
                    <span class="star">★</span>
                    <span class="nota">4.1</span>
                </div>
                <button class="add-button">+</button>
            </div>

            <div class="product-card">
                <img src="imagem do produto" alt="foto lanche aqui" class="imagem do produto">
                <h3 class="titulo do produto">Nome do Lanche Aqui</h3>
                <div class="estrelas avaliacao">
                    <span class="star">★</span>
                    <span class="nota">4.5</span>
                </div>
                <button class="add-button">+</button>
            </div>
            
            <a href="Pagamento.html" class="finish-order">
                Finalizar Pedido <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

body {
    background-color: #f5f5f5;
}

.header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: white;
}

.back-button {
    color: #333;
    text-decoration: none;
    margin-right: 15px;
    font-size: 24px;
}

.logo {
    font-family: 'Lobster', cursive;
    font-size: 45px;
    font-weight: regular;
    color: #3C2F2F;
}

.nav-menu {
    display: flex;
    gap: 10px;
    padding: 15px;
    background-color: white;
    margin-bottom: 20px;
    overflow-x: auto;
    white-space: nowrap;
}

.nav-item {
    padding: 8px 20px;
    border-radius: 20px;
    background-color: #f5f5f5;
    color: #333;
    text-decoration: none;
    cursor: pointer;
}

.nav-item.active {
    background-color: #EF2A39;
    color: white;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    margin-bottom: 80px;
}

.product-card {
    background: white;
    border-radius: 15px;
    padding: 15px;
    position: relative;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

.product-title {
    font-size: 16px;
    margin-bottom: 5px;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: 5px;
}

.star {
    color: #FFD700;
}

.rating-value {
    color: #333;
}

.add-button {
    position: absolute;
    right: 15px;
    bottom: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f5f5f5;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.finish-order {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #EF2A39;
    color: white;
    padding: 15px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>