import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import ProductItem from "../ProductItem/ProductItem";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setProducts(data);
        return data;
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductItem products={products} />
    </div>
  );
};

export default Products;
