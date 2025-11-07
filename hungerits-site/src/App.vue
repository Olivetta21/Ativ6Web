<template>
  <ToastsMessages />
  <RouterView/>
</template>

<script>
import ToastsMessages from './components/ToastMessage/ToastsMessages.vue';


export default {
  name: 'App',
  components: {
    ToastsMessages
  }
}
</script>

<style>
:root {
  --red: #EF2A39;
  --brown: #3C2F2F;
  --bg: #fff;
  --muted: #9b9b9b;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
    cursor: pointer;
    background-color: transparent;
    border: none;
}


#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
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
