import React from "react";
import { useSelector } from "react-redux";
import MainNavigation from "../../UI/MainNavigation";
import ProductItem from "../../UI/ProductItem/ProductItem";

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log('cart items', cartItems);

    return <React.Fragment>
      <MainNavigation />
      {cartItems.map((item) => (
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
      ))}
    </React.Fragment>
};

export default Cart;
