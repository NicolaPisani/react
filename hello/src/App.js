import React from "react";
import Hello from "./Hello";
import Message from "./Message";

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    <div>
      <Hello />
      <Message />
    </div>
  );
}

export default App;
