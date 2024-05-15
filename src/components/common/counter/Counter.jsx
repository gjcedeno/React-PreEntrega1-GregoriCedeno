import React from 'react';
import './Counter.css';

const Counter = ({ restar, sumar, contador, onAdd }) => {
  return (
    <div className="counter-container">
      <button onClick={restar} className="counter-button">-</button>
      <h2 className="counter-value">{contador}</h2>
      <button onClick={sumar} className="counter-button">+</button>
      <button onClick={() => onAdd(contador)} className="add-to-cart-button">Agregar al carrito</button>
    </div>
  );
}

export default Counter;



  