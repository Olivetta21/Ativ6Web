import { fetchJson } from "../Fetcher";
import router from "../Router";
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
        router.push({name: 'login'});
    }
}

export default Login;