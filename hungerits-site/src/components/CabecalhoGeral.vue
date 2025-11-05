<template>
  <div id="usernameheader"> Olá {{ Usuario.nome }}</div>
  <RouterView/>
</template>
<script>
import Usuario from './Login/Usuario';

export default {
  name: 'CabecalhoGeral',
  data() {
    return {
      Usuario
    };
  }
}
</script>

<style scoped>
#usernameheader {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>