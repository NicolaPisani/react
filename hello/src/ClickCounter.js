import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default ClickCounter;
