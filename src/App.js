import "./App.css";
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Home from "./components/pages/home/home";
import AuthContext from "./store/auth-context";
import Cart from "./components/pages/cart/Cart";
import ProductItemDetails from "./components/pages/ProductItemDetails/ProductItemDetails";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      {/* todo : update to protected routes */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products/:productItem">
          <ProductItemDetails />
        </Route>
        <Route path="/products">
          {console.log("login", authContext.isLoggedIn)}
          <Home />
          {/* {authContext.isLoggedIn ? <Home /> : <Login />} */}
        </Route>
        <Route path="/cart">
          {/* {authContext.isLoggedIn ? <Cart /> : <Login />} */}
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
