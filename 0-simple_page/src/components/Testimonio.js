import React from 'react';
import '../stlyesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        // alt='Foto del'
        alt={'foto de ' + props.nombre}
      />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
          <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.Testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
