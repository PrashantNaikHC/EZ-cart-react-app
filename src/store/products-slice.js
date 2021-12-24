import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    filteredList: [],
    searchMode: false,
    searchText: "",
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
      console.log("product list", state.productList);
      state.filteredList = state.productList.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log("reducer executed", "filterSearch");
    },

    /**
     * Payload is below mentioned object
     * @param {state} state
     * @param {action} action
     * {
     *  category: "mens clothing"
     *  rangeTop: "10"
     *  rangeBottom: "100"
     * }
     */
    filterSearchWithParams(state, action) {
      const { category, rangeTop, rangeBottom } = action.payload;
      console.log("filtering by params ", category, rangeTop, rangeBottom);
      state.filteredList = state.productList
        .filter((product) => product.category === category)
        .filter(
          (product) =>
            +product.price > +rangeBottom && +product.price < +rangeTop
        );

      console.log("filtered list", state.filteredList);
      state.searchText = "applied filter";
    },

    toggleSearchMode(state, action) {
      state.searchMode = action.payload;
    },
  },
});

export const productActions = productsSlice.actions;

export default productsSlice;
