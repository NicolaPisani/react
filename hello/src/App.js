import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {
  handleRemoveItem = (index) => {
    // Implementa l'eliminazione dell'elemento con l'indice specificato
    console.log("Remove item at index:", index);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList
          render={(items, handleRemoveItem) => (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => handleRemoveItem(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        />
      </div>
    );
  }
}

export default App;
