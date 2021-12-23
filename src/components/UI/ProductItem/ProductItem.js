import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <ul>
      {props.products.map((item) => (
        <li className={classes.item} key={item.id}>
          <img src={item.image} style={{ width: "25%" }}></img>
          <div className={classes.detail}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <input type="number" min="0" max="10"></input>
            <Button>Add to cart</Button>
          </div>
          <br />${item.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductItem;