import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../UI/ProductItem/ProductItem";

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log('cart items', cartItems);

    return cartItems.map((item) => (
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
};

export default Cart;
