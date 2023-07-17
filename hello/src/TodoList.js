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

  handleReset = () => {
    this.setState({ items: [] });
  };

  render() {
    const { items, inputValue } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;
