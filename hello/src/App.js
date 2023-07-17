import React from "react";
import ClickCounter from "./ClickCounter";

class App extends React.Component {
  handleCounterChange = (value) => {
    console.log("Counter changed:", value);
  };

  render() {
    return (
      <div>
        <h1>My App</h1>
        <ClickCounter onCounterChange={this.handleCounterChange} />
      </div>
    );
  }
}

export default App;
