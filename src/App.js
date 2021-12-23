import "./App.css";
import React, {useContext} from 'react';
import { Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/home";
import AuthContext from "./store/auth-context";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/products">
        {authContext.isLoggedIn ? <Home /> : <Login />}
      </Route>
    </div>
  );
}

export default App;
