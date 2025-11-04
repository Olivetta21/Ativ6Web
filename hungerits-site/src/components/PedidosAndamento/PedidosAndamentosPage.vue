

<template>
<body>
    <div class="wrap">
        <header class="header">
            <button @click="$router.push({name: 'home'})"><SetaButton dir="left"/></button>
            <h1 class="logo">Hungerits</h1> 
        </header>

        <h2>Pedidos Confirmados</h2>

        <div class="table-head">
            <div>Numero do Pedido</div>
            <div>Status</div>
            <div>Prato</div>
            <div>Valor</div>
            <div>Mesa</div>
            <div>Cliente</div>
            <div v-if="PedidosAndamento.cancelando">cancelar</div>
            <div v-else-if="PedidosAndamento.alterando">alterar</div>
        </div>

        <div class="list">
            <div class="item" v-for="(pedido, idx) in PedidosAndamento.pedidos" :key="pedido.pedido_num">
                <div class="pedido">{{ pedido.pedido_num }}</div>
                <div class="status">{{ pedido.pedido_status }}</div>
                <div class="prato">{{ pedido.prato_nome }}</div>
                <div class="valor">R$ {{ pedido.valor.toFixed(2) }}</div>
                <div class="mesa">{{ pedido.mesa_id }}</div>
                <div class="cliente">{{ pedido.cliente_nome }}</div>
                <div v-if="PedidosAndamento.cancelando">
                    <button v-if="!pedido.cancelando" @click="PedidosAndamento.marcarCancelarPedido(idx)">[ . ]</button>
                    <button v-else @click="PedidosAndamento.desmarcarCancelarPedido(idx)">[ X ]</button>
                </div>
                <div v-else-if="PedidosAndamento.alterando">
                    <button @click="PedidosAndamento.alterarPedido(pedido.pedido_num)">Alterar</button>
                </div>
            </div>
        </div>
    </div>

    <div class="actions">
        <button v-if="!PedidosAndamento.alterando" class="btn" @click="PedidosAndamento.cancelando = !PedidosAndamento.cancelando">
            {{ PedidosAndamento.cancelando ? 'desistir' : 'Cancelar Pedidos' }}
        </button>
        <button v-if="!PedidosAndamento.cancelando" class="btn" @click="PedidosAndamento.alterando = !PedidosAndamento.alterando">
            {{ PedidosAndamento.alterando ? 'desistir' : 'Alterar Pedidos' }}
        </button>
        <button v-else class="btn" >Confirmar Cancelamento</button>
    </div>
</body>
</template>


<script>
import SetaButton from '../botoes/SetaButton.vue';
import PedidosAndamento from './PedidosAndamento';


export default {
    name: 'PedidosAndamentosPage',
    data() {
        return {
            PedidosAndamento
        }
    },
    components: {
        SetaButton
    }
}

</script>


<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
}
.wrap {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.logo {
    flex-grow: 1;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
h2 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}
.table-head {
    display: flex;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.table-head div {
    flex: 1;
    text-align: center;
}
.list .item {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}
.list .item .name, .list .item .status {
    flex: 1;
    text-align: center;
}
.actions {
    text-align: center;
    margin: 20px 0;
}

</style>