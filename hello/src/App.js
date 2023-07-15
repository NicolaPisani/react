import React from "react";
import ClickCounter from "./ClickCounter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Benvenuto nella mia applicazione</h1>
        <ClickCounter />
      </div>
    );
  }
}

export default App;
