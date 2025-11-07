import { ref } from "vue";

class Usuario {
    static logado = false;

    static _info = ref(
        {
            id: '',
            nome: '',
            email: '',
            admin: ''
        }
    )

    static get id() {return this._info.value.id;}
    static get nome() {return this._info.value.nome;}
    static get email() {return this._info.value.email;}
    static get admin() {return this._info.value.admin;}
    static set info(novoUsuario) {
        this._info.value.id = novoUsuario.id;
        this._info.value.nome = novoUsuario.nome;
        this._info.value.email = novoUsuario.email;
        this._info.value.admin = novoUsuario.admin;
    }
}

export default Usuario;