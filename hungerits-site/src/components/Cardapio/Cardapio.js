import { ref } from "vue";
import Sacola from "./Sacola";
import Usuario from "../Login/Usuario";
import router from "../Router";
import { fetchJson } from "../Fetcher";
import { tratarRetornoApi } from "../utils";


class Cardapio {
    static _pratos = ref([
        //{id: 1, nome: "X Salada", preco: 18.00, imagem: "img"}
    ]);

    static get pratos() {return this._pratos.value;}

    static adicionarPrato(id, nome, preco) {
        this.pratos.push({id: id, nome: nome, preco: preco});
    }


    static async carregarPratos() {
        let r = await fetchJson("getCardapio.php", []);
        if (!r.cardapio) {
            tratarRetornoApi(r);
            return;
        }

        console.log("Cardapio recebido: ", r.cardapio);
        r.cardapio.forEach((prato) => {
            this.adicionarPrato(prato.id, prato.nome, parseFloat(prato.preco), 'img');
        });

        return;
    }

    static limparPratos() {
        this._pratos.value = [];
    }


    static inserirNaSacola(prato_index) {
        const prato = this.pratos[prato_index];
        Sacola.addPrato(prato);
    }
    
    // insere no banco e manda pro pagamento
    static async finalizarPedido() {
        const id_usuario = Usuario.id;
        const pratos_pedido = [];

        Sacola.pratos.forEach((prato) => {
            pratos_pedido.push({id: prato.id, preco: prato.preco, mesa_id: 1});
        });
        let r = await fetchJson("inserePedidos.php", [{"h": "usuario_id", "b": id_usuario}, {"h": "pratos", "b": pratos_pedido}]);
        if (!r?.success) {
            tratarRetornoApi(r);
            return;
        }

        console.log(r.success);
        Sacola.limparSacola();

        router.push({name: 'pagamento'});
    }
}

export default Cardapio;