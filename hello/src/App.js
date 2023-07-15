import React from "react";
import Login from "./Login";

class App extends React.Component {
  handleLogin = (credentials) => {
    
    console.log("Login:", credentials);
  };

  render() {
    return (
      <div>
        <h1>App di Login</h1>
        <Login onLogin={this.handleLogin} />
      </div>
    );
  }
}

export default App;
