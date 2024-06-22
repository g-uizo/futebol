import axios from "axios";
export class jogadorService {
    async get(){
        const res = await axios.get("http://localhost:38000/jogador")
        return res.data 
    }
    async post(jogador){
        const res = await axios.post("http://localhost:38000/jogadores", jogador)
        return res.data;
    }

}