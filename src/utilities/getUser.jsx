import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const useUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //get axios hooks...............!
  const axiosSecure = useAxiosSecure();
  console.log(axiosSecure);

  const loadData = async () => {
    setLoading(true);
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { user, loading, error, loadData };
};
