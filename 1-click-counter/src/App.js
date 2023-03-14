import './App.css';
import Boton from './components/Botton';
import Contador from './components/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='bcondict-logo-contenedor'>
        <img
          src="/bcondict_logo.svg"
          className='bcondict-logo'
          alt='Logo de bcondcit'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}></Contador>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
        texto='reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
