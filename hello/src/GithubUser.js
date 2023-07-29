// import React, { useEffect } from "react";
// import useGithubUser from "./useGithubUser";

// function GithubUser({ username }) {
//   const { userData, loading, error, fetchUserData } = useGithubUser();

//   useEffect(() => {
//     if (username) {
//       fetchUserData(username);
//     }
//   }, [username, fetchUserData]);

//   if (loading) {
//     return <div>loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!userData) {
//     return null;
//   }

//   return (
//     <div>
//       <h1>{userData.name}</h1>
//       <p>{userData.bio}</p>
//       {/* Altri dati dell'utente */}
//     </div>
//   );
// }

// export default GithubUser;

import React, { useState } from "react";
import { useGithubUser } from "./useGithubUser";

export const GithubUser = () => {
  const [username, setUsername] = useState("");
  const [fetchDataGit, data, error, loading] = useGithubUser(username);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleSearch = (username) => {
    fetchDataGit(username);
  };
  console.log(data);
  return (
    <>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={() => handleSearch(username)}>Search</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <img src={data.avatar} alt="GitHub Avatar" />}
      {data && <p>{data.bio}</p>}
    </>
  );
};
export default GithubUser;
