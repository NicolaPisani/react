import { useEffect, useState } from "react";

export const useGithubUser = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataGit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataGit();
  }, [username]);
  return [fetchDataGit, data, error, loading];
};
