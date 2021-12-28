import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { productActions } from "../../store/products-slice";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  let cartLabel;
  if (cartItems.length > 0) {
    cartLabel = "Cart" + ` (${cartItems.length})`;
  } else {
    cartLabel = "Cart";
  }

  const searchInputHandler = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      dispatch(productActions.toggleSearchMode(false));
    } else {
      dispatch(productActions.toggleSearchMode(true));
      dispatch(productActions.filterSearch(event.target.value));
    }
  };

  const searchFocusHandler = () => {
    if (location.pathname !== "/products") {
      history.push("/products");
    }
  };

  return (
    <header className={classes.header}>
      <Link className={classes.logo}>EZCart</Link>
      <div>
        <input
          className={classes.searchinput}
          type="text"
          id="search"
          placeholder="Search products"
          onChange={searchInputHandler}
          onFocus={searchFocusHandler}
        ></input>
      </div>
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
