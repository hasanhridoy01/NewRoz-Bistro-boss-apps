import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebase.init";
import PropTypes from "prop-types";
import axios from "axios";

//create context on the site..................!
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create a new user form firebase....................!
  const createUser = (email, password) => {
    setLoading(true);

    //create user................!
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //signIn a new user form firebase....................!
  const signInUser = (email, password) => {
    setLoading(true);

    //login a user...................!
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signOut a user form firebase.......................!
  const signOutUser = () => {
    setLoading(true);

    //sign out a user....................!
    return signOut(auth);
  };

  //update user profile................!
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  useEffect(() => {
    // Subscribe to the auth state changes
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      if(currentUser){
        //get token and store client side............!
        const userInfo = { email: currentUser.email };
        axios.post('/jwt', userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token);
          }
        });
      }else{
        //do some thing.......!
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => {
      unSubscribe();
    };
  }, []);

  //send info and data form components.......................!
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

//Assign Props Type on this Components..................!
AuthProvider.propTypes = {
  children: PropTypes.shape({
    children: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthProvider;
