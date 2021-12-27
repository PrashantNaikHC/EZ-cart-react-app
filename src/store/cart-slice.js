import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    /**
     * Payload is the product object
     * @param {state} state
     * @param {action} action
     */
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        // update the total quantity
      } else {
        state.cartItems.push(newItem);
      }
      console.log("reducer executed", "addItem");
    },

    /**
     * Payload is the ID of the product
     * @param {state} state
     * @param {action} action
     */
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        console.log("item exists");
        // item already present in cart, remove it
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        );
      }
      console.log("reducer executed", "removeItem", state.cartItems);
    },

    /**
     * Has no payload, clears the cart array
     * @param {state} state
     * @param {action} action
     */
    clearCart(state, action) {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
