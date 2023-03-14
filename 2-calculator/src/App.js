import './App.css';
import Botton from './Componentes/Botton';
import Screen from './Componentes/Screen';
import BottonClear from './Componentes/BottonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState(''); 

  const agregarInput = val => {

    var operadores = ['+', '-', '*', '/']

    if (operadores.includes(input[input.length - 1]) && operadores.includes(val)) {
      setInput(input.slice(0, -1) + val);
      return;
    }

    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } 
  };

  return (
    <div className="App">
      <div className='bcondict-logo-contenendor'>
        <img
          src="/bcondict_logo.svg"
          className='bcondict-logo'
          alt='Logo de bcondcit'/>
      </div>

      <div className='contenedor-calculadora'>
        <Screen input={input}/>
        <div className='fila'>
          <Botton manejarClic={agregarInput}>1</Botton>
          <Botton manejarClic={agregarInput}>2</Botton>
          <Botton manejarClic={agregarInput}>3</Botton>
          <Botton manejarClic={agregarInput}>+</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={agregarInput}>4</Botton>
          <Botton manejarClic={agregarInput}>5</Botton>
          <Botton manejarClic={agregarInput}>6</Botton>
          <Botton manejarClic={agregarInput}>-</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={agregarInput}>7</Botton>
          <Botton manejarClic={agregarInput}>8</Botton>
          <Botton manejarClic={agregarInput}>9</Botton>
          <Botton manejarClic={agregarInput}>*</Botton>
        </div>
        <div className='fila'>
          <Botton manejarClic={calcularResultado}>=</Botton>
          <Botton manejarClic={agregarInput}>0</Botton>
          <Botton manejarClic={agregarInput}>.</Botton>
          <Botton manejarClic={agregarInput}>/</Botton>
        </div>
        <div className='fila'>
          <BottonClear manejarClear={() => setInput('')}>
            Clear
          </BottonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
