import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberChange = () => {
    setRemember(!remember);
  };

  const handleLogin = () => {
    const credentials = {
      username: username,
      password: password,
      remember: remember,
    };
    // Effettua l'accesso utilizzando le credenziali
    console.log(credentials);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={handleUsernameChange}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <label>
        <input
          type="checkbox"
          checked={remember}
          onChange={handleRememberChange}
        />
        Remember me
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
