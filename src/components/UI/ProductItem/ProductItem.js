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
      <img src={image} style={{ width: "25%" }}></img>
      <div className={classes.detail}>
        <h4>{title}</h4>
        <p>{description}</p>
        <input type="number" min="0" max="10"></input>
        <Button onClick={addToCartHandler}>Add to cart</Button>
      </div>
      <br />${price}
    </li>
  );
};

export default ProductItem;
