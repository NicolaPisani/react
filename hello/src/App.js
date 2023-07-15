import React from "react";
import ClickTracker from "./ClickTracker";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My App</h1>
        <ClickTracker />
      </div>
    );
  }
}

export default App;
