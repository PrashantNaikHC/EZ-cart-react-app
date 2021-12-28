import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getProductById } from "../../../lib/api";
import Button from "../../UI/Button/Button";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import MainNavigation from "../../UI/MainNavigation";

const ProductItemDetails = (props) => {
  const params = useParams();
  const productId = params.productItem;
  const { sendRequest, status, data, error } = useHttp(
    getProductById.bind(null, productId)
  );

  useEffect(() => {
    sendRequest();
  }, []);

  if (error) {
    return <p className="centered">{error}</p>;
  }

  const percentage = (rating) => {
    return ((rating / 5.0) * 100).toFixed(0);
  };

  return (
    <React.Fragment>
      <MainNavigation />
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {status === "completed" && (
        <div className="row">
          <div className="col8">
            <img src={data.image}></img>
          </div>
          <div className="col4">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>
              Price : <strong>${data.price}</strong>
            </p>
            <p>Category : {data.category}</p>
            <p>
              Rating : {data.rating.rate} out of 5 (
              <i>{percentage(data.rating.rate)}%)</i>
            </p>
            <Button> Add to cart</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductItemDetails;
