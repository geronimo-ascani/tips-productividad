import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const tips = [
  "Dividí tareas grandes en pequeñas.",
  "Usá la técnica Pomodoro.",
  "Evitá el multitasking.",
  "Automatizá tareas repetitivas.",
  "Tomá descansos cortos regularmente.",
  "Documentá mientras desarrollás.",
  "Aprendé a decir que no.",
  "Medí tu tiempo de trabajo.",
];

function TipActual({tip, votos, onVotar, onSiguiente}){
  return(
     <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
      <h2>Tip actual</h2>
      <p>"{tip}"</p>
      <p>⭐ Votos: {votos}</p>
      <button onClick={onVotar} style={{ marginRight: "8px" }}>
        Me sirvió 👍
      </button>
      <button onClick={onSiguiente}>
        Siguiente tip 🎲
      </button>
    </div>

  );
}

function TipMasVotado({tip, votos}){
  return(
     <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "16px" }}>
      <h2>🏆 Tip más votado</h2>
      {tip === null ? (
        <p>Todavía no hay votos.</p>
      ) : (
        <>
          <p>"{tip}"</p>
          <p>⭐ Votos: {votos}</p>
        </>
      )}
    </div>
  );
}


function App() {

  const [indiceActual, setIndiceActual] = useState(0);
  const [votos, setVotos] = useState({});

  function TipAleatorio(){
  let nuevoIndice;

  do{
    nuevoIndice = Math.floor(Math.random() * tips.length);
  } while(nuevoIndice === indiceActual);

  setIndiceActual(nuevoIndice);
}

function masVotado(){
  const indices = Object.keys(votos);
    if (indices.length === 0) return null;
  
  let masVotado = indices[0];

  for (let i = 1; i < indices.length; i++) {
    if (votos[indices[i]] > votos[masVotado]) {
      masVotado = indices[i];
    }
  }
  return masVotado;
}

const indiceMasVotado = masVotado();

function VotarTip(){
  const copiaVotos = {...votos};

  copiaVotos[indiceActual] = (copiaVotos[indiceActual] || 0) + 1;
  setVotos(copiaVotos);
}

return (
  <div style={{ margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>💡 Tips de Productividad</h1>

      <TipActual
        tip={tips[indiceActual]}
        votos={votos[indiceActual] || 0}
        onVotar={VotarTip}
        onSiguiente={TipAleatorio}
      />  

      <TipMasVotado
        tip={indiceMasVotado !== null ? tips[indiceMasVotado] : null}
        votos={indiceMasVotado !== null ? votos[indiceMasVotado] : 0}
      />

  </div>
);
  
}

export default App
