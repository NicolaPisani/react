import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 20);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1>Counter: {count}</h1>;
};

export default Counter;
