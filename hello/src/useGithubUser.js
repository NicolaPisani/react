import useSWR from "swr";

export const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null
  );

  const fetchDataGit = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      mutate(data, false); // Update the data without revalidation
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return { userData: data, loading: !data && !error, error, fetchDataGit };
};

