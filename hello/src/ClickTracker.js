import React from "react";

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButtonPressed: "",
    };
  }

  handleButtonClick = (event) => {
    const lastButtonPressed = event.target.innerText;
    this.setState({ lastButtonPressed });
  };

  render() {
    const { lastButtonPressed } = this.state;

    return (
      <div>
        <h1>Last Button Pressed: {lastButtonPressed}</h1>
        <button onClick={this.handleButtonClick}>Button 1</button>
        <button onClick={this.handleButtonClick}>Button 2</button>
        <button onClick={this.handleButtonClick}>Button 3</button>
      </div>
    );
  }
}

export default ClickTracker;
