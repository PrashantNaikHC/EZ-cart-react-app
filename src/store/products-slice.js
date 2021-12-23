import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    filteredList: [],
    searchMode: false,
    searchText:''
  },
  reducers: {
    /**
     * Payload is the list of products
     * @param {state} state
     * @param {action} action
     */
    loadProducts(state, action) {
      state.productList = action.payload;
      console.log("reducer executed", "loadProducts");
    },

    /**
     * Payload is the string to be searched
     * @param {state} state
     * @param {action} action
     */
    filterSearch(state, action) {
      const searchText = action.payload;
      state.searchText = searchText;
      console.log('product list',state.productList);
      state.filteredList = state.productList.filter((product) =>
        product.title.includes(searchText)
      );
      console.log("reducer executed", "filterSearch");
    },

    toggleSearchMode(state, action) {
      state.searchMode = action.payload;
    },
  },
});

export const productActions = productsSlice.actions;

export default productsSlice;
