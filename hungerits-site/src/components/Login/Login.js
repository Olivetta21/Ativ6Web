import { fetchJson } from "../Fetcher";
import { tratarRetornoApi } from "../utils";


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
}

export default Login;