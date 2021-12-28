import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/home";
import Login from "../../pages/login/Login";
import ProductItemDetails from "../../pages/ProductItemDetails/ProductItemDetails";
import Register from "../../pages/register/Register";
import MainNavigation from "../MainNavigation";
import classes from "./MainRouter.module.css";

// this contains the Main Navigation
const MainRouter = (props) => {
  return (
    <div>
      <div className={classes.header}>
        <MainNavigation />
      </div>
      <div className={classes.content}>
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
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainRouter;
