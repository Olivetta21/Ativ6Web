import { ref } from "vue";


class PedidosAndamento {
        static _pedidos = ref([
            {
                pedido_num: 1,
                pedido_status: "pendente",
                prato_nome: "X Salada",
                mesa_id: 1,
                cliente_nome: "Ivan",
                valor: 18.00
            },
            {
                pedido_num: 2,
                pedido_status: "pendente",
                prato_nome: "X Burger",
                mesa_id: 1,
                cliente_nome: "Ivan",
                valor: 20.00
            }
        ]);
        static get pedidos() {return this._pedidos.value;}

        static cancelar = ref(false);
        static get cancelando() {return this.cancelar.value;}
        static set cancelando(valor) {this.cancelar.value = valor;}
        
        static marcarCancelarPedido(idx) {
            //criando variavel
            this.pedidos[idx].cancelando = true;
        }
        static desmarcarCancelarPedido(idx) {
            //deletando variavel
            delete this.pedidos[idx].cancelando;
        }

        static alterar = ref(false);
        static get alterando() {return this.alterar.value;}     
        static set alterando(valor) {this.alterar.value = valor;}

        static adicionarPedido(pedido_num, pedido_status, prato_nome, mesa_id, cliente_nome, valor) {
            this.pedidos.push({
                pedido_num: pedido_num,
                pedido_status: pedido_status,
                prato_nome: prato_nome,
                mesa_id: mesa_id,
                cliente_nome: cliente_nome,
                valor: valor
            });
        }

}

export default PedidosAndamento;