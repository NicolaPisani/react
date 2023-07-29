
import useSWR from "swr";

const fetchUserData = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Impossibile recuperare i dati dell'utente");
  }
  return response.json();
};

const useGithubUser = (username) => {
  const { data, error } = useSWR(username, fetchUserData);

  return {
    userData: data,
    loading: !error && !data,
    error: error,
  };
};

export default useGithubUser;




// import { useState } from "react";

// export const useGithubUser = ({ username }) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchDataGit = async (username) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);

//       const data = await response.json();

//       if (data.status === 404) {
//         throw new Error("error");
//       } else if (data.status !== 200) {
//         throw new Error("error");
//       } else {
//         setData(data);
//       }
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return [fetchDataGit, data, error, loading];
// };
