import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <Welcome name={inputValue} />
      </div>
    );
  }
}

export default InteractiveWelcome;
