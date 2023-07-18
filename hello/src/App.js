import React from "react";
import FilteredList from "./FilteredList";

function App() {
  const list = [
    { id: 1, name: "Nicola", age: 20 },
    { id: 2, name: "Chiara", age: 15 },
    { id: 3, name: "Alice", age: 25 },
    { id: 4, name: "Bob", age: 30 },
  ];

  return (
    <div>
      <h1>My App</h1>
      <FilteredList list={list} />
    </div>
  );
}

export default App;
