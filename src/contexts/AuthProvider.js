import React, { createContext } from "react";
import { useState } from "react";
import { app } from "./../firebase/firebse.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addNameAndDisplayImage = profile => {
    return updateProfile(auth.currentUser, profile);
  };

  const authInfo = { user, createUser, addNameAndDisplayImage };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
