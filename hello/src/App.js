import React from "react";
import UncontrolledLogin from "./UncontrolledLogin";

class App extends React.Component {
  handleLogin = (credentials) => {
    console.log("Login:", credentials);
  };

  render() {
    return (
      <div>
        <h1>App di Login</h1>
        <UncontrolledLogin onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
