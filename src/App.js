import "./App.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/home";
import AuthContext from "./store/auth-context";
import Cart from "./components/pages/cart/Cart";
import ProductItemDetails from "./components/pages/ProductItemDetails/ProductItemDetails";
import MainNavigation from "./components/UI/MainNavigation";
import MainRouter from "./components/UI/MainRouter/MainRouter";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {/* todo : update to protected routes */}
      <MainRouter/>
    </div>
  );
}

export default App;
