import { useState, useEffect } from "react";

const useGithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Impossibile recuperare i dati dell'utente");
      }
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { userData, loading, error, fetchUserData };
};

export default useGithubUser;
