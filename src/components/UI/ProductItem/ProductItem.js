import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./ProductItem.module.css";

const ProductItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const addToCartHandler = () => {
    console.log("clicked add to cart with", title);
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
