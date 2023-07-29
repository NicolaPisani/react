import React from "react";
import { useParams } from "react-router-dom";
import { useGithubUser } from "./ShowGithubUsers";

export const GithubUser = () => {
    const { username } = useParams();
  const [fetchDataGit, data, error, loading] = useGithubUser(username);
console.log(data)
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data && <h1>{data.name}</h1>}
      {data && <img src={data.avatar_url} alt="GitHub Avatar" />}
      {data && <p>{data.bio}</p>}
    </>
  );
};
export default GithubUser;
