import { fetchJson } from "../Fetcher";
import router from "../Router";
import ToastMessage from "../ToastMessage/ToastMessage";
import { tratarRetornoApi } from "../utils";
import Usuario from "./Usuario";


class Login {
    
    static async login(login, pass) {
        var cred = {
            login: login,
            senha: pass
        }

        const r = await fetchJson("login.php", [{ h: "credenciais", b: cred }]);

        if (!r || !r.data || r.data.length === 0) {
            tratarRetornoApi(r);
            return null;
        }

        ToastMessage.success("Login realizado com sucesso!");
        return r;
    }

    static sair() {
        Usuario.info = 
        {
            id: '',
            nome: '',
            email: '',
            admin: ''
        };

        ToastMessage.info("Você saiu da sua conta.");
        router.push({name: 'login'});
    }
}

export default Login;