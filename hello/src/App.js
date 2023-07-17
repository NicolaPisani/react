import React from "react";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <div>
      <h1>Github user</h1>
      <GithubUser username="Nicola" />
      <GithubUserList/>
    </div>
  );
}

export default App;
