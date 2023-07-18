import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Incremento</button>
      <button onClick={decrement}>Decremento</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
