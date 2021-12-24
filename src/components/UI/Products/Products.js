import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import useHttp from "../../../hooks/use-http";
import { getAllProducts } from "../../../lib/api";
import { productActions } from "../../../store/products-slice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ProductItem from "../ProductItem/ProductItem";

const Products = (props) => {
  const { sendRequest, status, data, error } = useHttp(getAllProducts);
  const dispatch = useDispatch();
  const productSearchSelector = useSelector(
    (state) => state.products.searchMode
  );
  const productsSelector = useSelector((state) => state.products.filteredList);
  const productsSearchTextSelector = useSelector(
    (state) => state.products.searchText
  );

  useEffect(() => {
    sendRequest();
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

  if (status === "completed") {
    dispatch(productActions.loadProducts(data));
    console.log("loading data to cache", data);
  }

  const productListFromCache =
    status === "completed" &&
    productsSelector.map((item) => (
      <ul>
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      </ul>
    ));
  const productsListFromNetwork =
    status === "completed" &&
    data.map((item) => (
      <ul>
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          rating={item.rating}
        />
      </ul>
    ));

  return (
    <div>
      {productSearchSelector && (
        <p style={{margin: "10px"}}>
          {`Found ${productsSelector.length} item for `}
          <strong>{productsSearchTextSelector}</strong>
        </p>
      )}
      {productSearchSelector ? productListFromCache : productsListFromNetwork}
    </div>
  );
};

export default Products;
