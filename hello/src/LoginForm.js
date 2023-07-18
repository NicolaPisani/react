import React from "react";
import useFormInput from "./useFormInput";

function LoginForm() {
  const { username, password, handleUsernameChange, handlePasswordChange } =
    useFormInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
