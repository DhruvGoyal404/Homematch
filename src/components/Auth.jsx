import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './Firebase';  // Import your Firebase auth

const Authcontext = createContext();

export const useAuth = () => useContext(Authcontext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const logout = () => {
    auth.signOut();
    setUser(null);
  };

  const value = { user, setUser, logout };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};
