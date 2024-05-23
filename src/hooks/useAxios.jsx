import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "",
});

const useAxios = () => {
  return axiosSecure;
};

export default useAxios;
