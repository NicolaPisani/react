import React, { useState } from "react";
import { Link } from "react-router-dom";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState("");

  const handleAddUser = () => {
    setUsernames([...usernames, newUsername]);
    setNewUsername("");
  };

  return (
    <div>
      <h1>Github Users</h1>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>

      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GithubUserList;
