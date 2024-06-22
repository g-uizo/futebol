import axios from "axios";
 const get = async()=>{
        const res = await axios.get("http://localhost:3000/jogador")
        return res.data 
    }
 const post = async(jogador)=>{
        const res = await axios.post("http://localhost:3000/jogadores", jogador)
        return res.data;
    }

    export default {get,post}
