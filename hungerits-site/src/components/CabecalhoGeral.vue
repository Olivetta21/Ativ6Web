<template>
  <div class="cabecalho-geral">
    <div id="usernameheader"> 
      <h1>Hungerits</h1>
      <p>Olá {{ Usuario.nome }}</p>
      <button @click="Login.sair()"> Sair </button>
    </div>
    <RouterView/>
  </div>
</template>

<script>
import Login from './Login/Login';
import Usuario from './Login/Usuario';

export default {
  name: 'CabecalhoGeral',
  data() {
    return {
      Login,
      Usuario
    };
  }
}
</script>

<style scoped>

h1 {
    font-family: 'Lobster', cursive;
    font-size: 45px;
    font-weight: regular;
    margin: 0;
    padding: 0;
}


.cabecalho-geral {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100%;
}

#usernameheader {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>