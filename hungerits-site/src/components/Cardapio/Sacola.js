import { ref } from "vue";

class Sacola {
    static _quantidade = ref(0);
    static _valorTotal = ref(0);
    static get quantidade() {return this._quantidade.value;}
    static get valorTotal() {return this._valorTotal.value;}

    static _pratos = [];

    static addPrato(novoPrato) {
        this._pratos.push(novoPrato);
        this._quantidade.value++;
        this._valorTotal.value += novoPrato.preco;
    }

    static get pratos() {return this._pratos;}

}

export default Sacola;