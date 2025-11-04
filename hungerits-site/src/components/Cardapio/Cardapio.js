import { ref } from "vue";
import Sacola from "./Sacola";
import Usuario from "../Login/Usuario";
import router from "../Router";


class Cardapio {
    static _pratos = ref([
        {id: 1, nome: "X Salada", preco: 18.00, imagem: "img"},
        {id: 2, nome: "X Bacon", preco: 20.00, imagem: "img"},
    ]);

    static get pratos() {return this._pratos.value;}

    static adicionarPrato(id, nome, preco) {
        this.pratos.push({id: id, nome: nome, preco: preco});
    }

    static inserirNaSacola(prato_index) {
        const prato = this.pratos[prato_index];
        Sacola.addPrato(prato);
    }
    
    // insere no banco e manda pro pagamento
    static async finalizarPedido() {
        const id_usuario = Usuario.id;
        const pratos_pedido = Sacola.pratos;

        console.log("Finalizando pedido para o usuario " + id_usuario);
        console.log("Enviando pratos: ", pratos_pedido);

        router.push({name: 'pagamento'});
    }
}

export default Cardapio;