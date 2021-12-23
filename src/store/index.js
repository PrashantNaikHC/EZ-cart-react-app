import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import ProductsSlice from "./products-slice";


const store = configureStore({
    reducer: {cart: cartSlice.reducer, products: ProductsSlice.reducer}
})

export default store;