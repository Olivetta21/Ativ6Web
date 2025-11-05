import { ref } from "vue";
import { tratarRetornoApi } from "../utils";
import { fetchJson } from "../Fetcher";


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

        static async cancelarPedidos() {
            const pedidos_para_cancelar = [];
            this.pedidos.forEach(pedido => {
                if (pedido.cancelando) {
                    pedidos_para_cancelar.push(pedido.pedido_num);
                }
            });

            let r = await fetchJson("cancelarPedidos.php", [{"h": "ids", "b": pedidos_para_cancelar}]);
            if (!r?.success) {
                tratarRetornoApi(r);
                return;
            }
            console.log(r.success);
            this.limparPedidos();
            await this.carregarPedidos();
            return;
        }

        static alterar = ref(false);
        static get alterando() {return this.alterar.value;}     
        static set alterando(valor) {this.alterar.value = valor;}
        static alterarMarcado = ref(-1);
        static get alterandoIdx() {return this.alterarMarcado.value;}
        static set alterandoIdx(valor) {this.alterarMarcado.value = valor;}
        

        static marcarAlterarPedido(idx) {
            this.alterandoIdx = idx;
        }
        static desmarcarAlterarPedido() {
            this.alterandoIdx = -1;
            this.alterando = false;
        }

        static async alterarPedido(id, status, prato_id, mesa_id, usuario_id, preco) {
            let r = await fetchJson("editarPedido.php", [{"h": "pedido", "b": {id: id, status: status, prato_id: prato_id, mesa_id: mesa_id, usuario_id: usuario_id, preco: preco}}]);
            if (!r?.success) {
                tratarRetornoApi(r);
                return;
            }
            console.log(r.success);
            this.limparPedidos();
            await this.carregarPedidos();
            this.desmarcarAlterarPedido();
        }

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


        static async carregarPedidos() {
            let r = await fetchJson("getPedidosAndamentos.php", []);
            if (!r.pedidos_andamentos) {
                tratarRetornoApi(r);
                return;
            }

            r.pedidos_andamentos.forEach((pedido) => {
                this.adicionarPedido(pedido.pedido_num, pedido.pedido_status, pedido.prato_nome, pedido.mesa_id, pedido.cliente_nome, Number(pedido.valor));
            });
            return;
        }

        static limparPedidos() {
            this._pedidos.value = [];
        }

}

export default PedidosAndamento;