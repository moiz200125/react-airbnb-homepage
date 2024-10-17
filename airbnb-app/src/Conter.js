import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize count state

  const increment = () => {
    setCount(prevCount => prevCount + 1); // Increment count
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1); // Decrement count
  };

  const reset = () => {
    setCount(0); // Reset count to 0
  };

  return (
    <div className="counter-container">
      <h2 className="counter-value">{count}</h2>
      <div className="button-group">
        <button onClick={decrement} className="counter-button">-</button>
        <button onClick={reset} className="reset-button">Reset</button>
        <button onClick={increment} className="counter-button">+</button>
      </div>
    </div>
  );
};

export default Counter;
