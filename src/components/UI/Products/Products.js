import React from "react";
import { useEffect } from "react/cjs/react.development";
import useHttp from "../../../hooks/use-http";
import { getAllProducts } from "../../../lib/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ProductItem from "../ProductItem/ProductItem";

const Products = (props) => {
  const { sendRequest, status, data, error } = useHttp(getAllProducts);

  useEffect(() => {
    sendRequest();
    console.log('data', data);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  return <div>{status === "completed" && <ProductItem products={data} />}</div>;
};

export default Products;
