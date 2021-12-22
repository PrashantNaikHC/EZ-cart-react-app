import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
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
              Cart
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
