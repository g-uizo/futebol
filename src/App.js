import { useState, useEffect } from 'react';
import Jogador from './services/Jogador';

function App() {
    const [lista,setLista] = useState([]);

    useEffect(() => {
      const chamar = async () => {
        const ret = await Jogador.get()
        setLista(ret);
      }
      chamar();
    }, [])
    return (
      <main>
        <h1>Jogadores</h1>
        <section>
          {lista ? lista.map((jogador, posicao) => (
            <h1 key={posicao}>{jogador.nome}</h1>
          )): (
            <p>Jogadores não encontrados</p>
          )}
        </section>
        
      </main>

      )
    }
    
    export default App;
