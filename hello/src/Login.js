import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    onLogin(this.state);
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const { username, password } = this.state;
    const isDisabled = username === "" || password === "";

    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleInputChange}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
          placeholder="Password"
        />
        <br />
        <button onClick={this.handleLogin} disabled={isDisabled}>
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Login;
