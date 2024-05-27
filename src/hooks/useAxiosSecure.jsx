import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: "/url",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = useContext(AuthContext);

  //request interceptor to add authorization header........!
  axiosSecure.interceptors.request.use(
    function (config) {
      // Get token from local storage
      const token = localStorage.getItem("access-token");

      // If the token exists, set the authorization header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //response interceptor to add authorization header.......!
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      // Extract the response status
      const status = error.response ? error.response.status : null;

      // Handle 401 and 403 status codes
      if (status === 401 || status === 403) {
        await signOutUser();
        // Navigate to the login page
        navigate("/login");
      }

      // Always return the error so it can be handled elsewhere if needed
      return Promise.reject(error);
    }
  );

  //return this...............!
  return axiosSecure;
};

export default useAxiosSecure;
