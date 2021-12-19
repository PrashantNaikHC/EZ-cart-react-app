import React from "react";
import { useState } from "react/cjs/react.development";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
      setIsLoggedIn(true);
      console.log('Logged in');
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    console.log('Logged out');
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>
      {props.children}
  </AuthContext.Provider>;
};

export default AuthContext;
