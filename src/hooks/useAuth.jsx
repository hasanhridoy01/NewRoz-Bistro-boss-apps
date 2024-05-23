import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const useAuth = () => {
    //get auth and context
    const auth = useContext(AuthContext);

    return auth;
};

export default useAuth;