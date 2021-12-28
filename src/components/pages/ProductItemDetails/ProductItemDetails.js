import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useHttp from "../../../hooks/use-http";
import { getProductById } from "../../../lib/api";
import { cartActions } from "../../../store/cart-slice";
import Button from "../../UI/Button/Button";
import LoadingSpinner from "../../UI/LoadingSpinner/LoadingSpinner";
import MainNavigation from "../../UI/MainNavigation";

const ProductItemDetails = (props) => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [isCartItem, setIsCartItem] = useState(false)
  const dispatch = useDispatch();
  const params = useParams();
  const productId = params.productItem;
  const { sendRequest, status, data, error } = useHttp(
    getProductById.bind(null, productId)
  );

  useEffect(() => {
    sendRequest();
  }, []);

  useEffect(() => {
    if (status === "completed") {
      setCurrentProduct({
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
        image: data.image,
        rating: data.rating,
      });
      setIsCartItem(cartItems.filter((item) => item.id === data.id).length > 0)
      console.log("cart item", isCartItem);
    }
  }, [status, cartItems, isCartItem]);

  if (error) {
    return <p className="centered">{error}</p>;
  }

  const percentage = (rating) => {
    return ((rating / 5.0) * 100).toFixed(0);
  };

  const addToCartHandler = () => {
    dispatch(cartActions.addItem(currentProduct));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeItem(currentProduct.id));
  }

  return (
    <React.Fragment>
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
            {isCartItem ? (
              <Button onClick={removeFromCartHandler}> Remove from cart</Button>
            ) : (
              <Button onClick={addToCartHandler}> Add to cart</Button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductItemDetails;
