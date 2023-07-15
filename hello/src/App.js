import React from "react";
import InteractiveWelcome from "./InteractiveWelcome";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to My App</h1>
        <InteractiveWelcome />
      </div>
    );
  }
}

export default App;
