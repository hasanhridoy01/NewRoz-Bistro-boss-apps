import axios from 'axios';  // Use default import for axios

// Create an Axios instance with a base URL
export const AxiosPublic = axios.create({
    baseURL: '/url',  // Update this to your actual base URL
});

// A custom hook that returns the Axios instance
const useAxiosPublic = () => {
    return AxiosPublic;
};

// Export the custom hook as the default export
export default useAxiosPublic;