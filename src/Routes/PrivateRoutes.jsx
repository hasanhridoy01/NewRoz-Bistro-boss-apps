import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoutes = ({ children }) => {
  //Check User......!
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return <CircularProgress sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
  }

  if (user) {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace ></Navigate>;
};

//Assign Props Type on this Components..................!
PrivateRoutes.propTypes = {
  children: PropTypes.shape({
    children: PropTypes.string.isRequired,
  }).isRequired,
};

export default PrivateRoutes;
