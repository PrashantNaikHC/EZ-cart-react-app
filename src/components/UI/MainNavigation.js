import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let cartLabel;
  if (cartItems.length > 0) {
    cartLabel = "Cart" + ` (${cartItems.length})`;
  } else {
    cartLabel = "Cart";
  }

  return (
    <header className={classes.header}>
      <Link className={classes.logo}>EZCart</Link>
      <nav>
        <ul>
          <li>
            <Link className={classes.link} to="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/cart">
              {cartLabel}
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/help">
              Help
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
