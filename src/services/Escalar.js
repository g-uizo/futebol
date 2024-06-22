import React, { useState } from "react";
import { jogadorService } from "./Jogador";

const Escalar = () => {
    const [nome, setNome] = useState("");
    const [posicao, setPosicao] = useState("");
    const [imagem, setImagem] = useState(null);
    const [idade, setIdade] = useState()
    const chamar = async () => {
        await jogadorService.post({nome,posicao,imagem,idade});
    }
   
    return  <main>
    Escale agora
    <form onSubmit={(evento)=>{
        evento.preventDefault();
        chamar();
    }}>
              <input type="file" id="imagem" name="imagem" value={imagem} onChange={(evento) => {
    const file = evento.target.files[0];
    setImagem(file);
  }}
/>
<label> nome do jogador
        <input name="nome" id="nome" type="text" value={nome} onChange={(evento)=>{
            setNome(evento.target.value)
        }}> 
        </input>
        </label>

        <label> posição do jogador
        <input name="posicao" id="posicao" type="text" value={posicao} onChange={(evento)=>{
            setPosicao(evento.target.value)
        }}>
    
        </input>
        </label>

        <label> idade do jogador
        <input name="idade" id="idade" type="text" value={idade} onChange={(evento)=>{
            setIdade(evento.target.value)
        }}>
        </input>
        </label>

    <button type="submit">Escalar</button>
    </form>
</main>
    
}
export default Escalar;