import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/home";
import Login from "../../pages/login/Login";
import ProductItemDetails from "../../pages/ProductItemDetails/ProductItemDetails";
import Register from "../../pages/register/Register";
import MainNavigation from "../MainNavigation";
import classes from "./MainRouter.module.css";

// this contains the Main Navigation
const MainRouter = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <div className={classes.header}>
        {authContext.isLoggedIn && <MainNavigation />}
      </div>
      <div className={classes.content}>
        <Switch>
          <Route path="/login">
            <Login isLoggingIn={true}/>
          </Route>
          <Route path="/logout">
            <Login isLoggingIn={false}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/products/:productItem">
            {authContext.isLoggedIn ? <ProductItemDetails /> : <Login />}
          </Route>
          <Route path="/products">
            {authContext.isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/cart">
            {authContext.isLoggedIn ? <Cart /> : <Login />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainRouter;
