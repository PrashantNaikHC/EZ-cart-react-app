import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../../store/cart-slice";

const ProductItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    console.log("clicked add to cart with", title);
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
      })
    );
  };

  return (
    <li className={classes.item} key={id}>
      <div className={classes.detail}>
        <img src={image} className={classes.productImage}></img>
        <h4 className={classes.amount}><i>${price}</i></h4>
      </div>
      <div className={classes.detail}>
        <h4>{title}</h4>
        <p className={classes.description}>{description}</p>
        {/* <input type="number" min="0" max="10"></input> */}
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </div>
    </li>
  );
};

export default ProductItem;
