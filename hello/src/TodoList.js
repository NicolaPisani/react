import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddItem = () => {
    const { items, inputValue } = this.state;
    if (inputValue.trim() !== "") {
      const updatedItems = [...items, inputValue];
      this.setState({ items: updatedItems, inputValue: "" });
    }
  };

  handleRemoveItem = (index) => {
    const { items } = this.state;
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    this.setState({ items: updatedItems });
  };

  render() {
    const { items, inputValue } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemoveItem(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
      </div>
    );
  }
}

export default TodoList;
