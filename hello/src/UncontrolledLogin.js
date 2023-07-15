import React from "react";

class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    this.usernameRef.current.focus();
  }

  handleLogin = () => {
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;
    const credentials = { username, password };
    this.props.onLogin(credentials);
  };

  handleReset = () => {
    this.usernameRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.usernameRef} placeholder="Username" />
        <br />
        <input type="password" ref={this.passwordRef} placeholder="Password" />
        <br />
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
