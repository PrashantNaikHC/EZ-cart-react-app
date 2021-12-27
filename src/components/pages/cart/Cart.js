import React from "react";
import { useSelector } from "react-redux";
import MainNavigation from "../../UI/MainNavigation";
import PriceInfo from "../../UI/PriceInfo/PriceInfo";
import ProductItem from "../../UI/ProductItem/ProductItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("cart items", cartItems);

  return (
    <React.Fragment>
      <MainNavigation />
      {cartItems.length === 0 ? (
        <h1 style={{'text-align': "center"}}>Your cart is empty!</h1>
      ) : (
        <div className="centered">
          <div className="col9">
            <ul>
              {cartItems.map((item) => (
                <ProductItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  rating={item.rating}
                  isCartItem={true}
                />
              ))}
            </ul>
          </div>
          <div className="col3">
            <h3>Cart details</h3>
            <ul>
              <PriceInfo cartDetails={cartItems} />
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
