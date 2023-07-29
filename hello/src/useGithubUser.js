import { useState } from "react";

export const useGithubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataGit = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();

      if (data.status === 404) {
        throw new Error("error");
      } else if (data.status !== 200) {
        throw new Error("error");
      } else {
        setData(data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [fetchDataGit, data, error, loading];
};
