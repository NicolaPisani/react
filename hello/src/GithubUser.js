import React from "react";
import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const { userData, loading, error } = useGithubUser(username);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return null;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.bio}</p>
      {/* Altri dati dell'utente */}
    </div>
  );
}

export default GithubUser;
