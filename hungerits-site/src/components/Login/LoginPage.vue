<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">Usuário:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
import Usuario from './Usuario';

export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            console.log(`Usuário: ${this.username}, Senha: ${this.password}`);
            //mock
            Usuario.info = {
                id: '1',
                nome: this.username,
                email: this.username + '@example.com',
                admin: 'true'
            };
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}
.form-group {
    margin-bottom: 15px;
}
label {
    display: block;
    margin-bottom: 5px;
}
input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}
button {
    width: 100%;
    padding: 10px;
    background-color: #EF2A39;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #d62834;
}

</style>