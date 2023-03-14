import React from "react";
import '../Stylesheets/BottonClear.css';

const BottonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
)

export default BottonClear;
