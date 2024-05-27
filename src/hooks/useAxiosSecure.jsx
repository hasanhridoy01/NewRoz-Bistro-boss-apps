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
      //get token..........!
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
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
      const status = error.response.status;
      // status validation.............!
      if (status == 401 || status == 403) {
        await signOutUser();
        // navigate to login page......!
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  //return this...............!
  return axiosSecure;
};

export default useAxiosSecure;
