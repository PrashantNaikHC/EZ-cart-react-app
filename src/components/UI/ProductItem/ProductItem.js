import React from "react";

const ProductItem = (props) => {
  console.log("results getting", props.products);
  return (
    <ul>
      {props.products.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ProductItem;
