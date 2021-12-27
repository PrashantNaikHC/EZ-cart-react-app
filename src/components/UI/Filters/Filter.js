import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react/cjs/react.development";
import { productActions } from "../../../store/products-slice";
import FilterOptions from "./FilterOptions";

const Filter = (props) => {
  const [topPrice, setTopPrice] = useState(1000);
  const [bottomPrice, setBottomPrice] = useState(1);
  const dispatch = useDispatch();
  const categoryRef = useRef();
  const [filterEnabled, setFilterEnabled] = useState(false);
  let firstExecution = true;
  const productsList = useSelector((state) => state.products.productList);
  const categories = new Set(productsList.map((product) => product.category));
  console.log("cat", Array.from(categories));

  // this block is inside the useEffect hook,
  // since the changes of topPrice and bottomPrice were not showing up immediately
  useEffect(() => {
    dispatchFilterAction();
  }, [topPrice, bottomPrice]);

  const checkedListener = (event) => {
    setFilterEnabled(event.target.checked);
    dispatch(productActions.toggleSearchMode(event.target.checked));
    dispatchFilterAction();
  };

  const filterInputHandler = () => {
    dispatchFilterAction();
  };

  const dispatchFilterAction = () => {
    if (filterEnabled || firstExecution) {
      const categoryInput = categoryRef.current.value;
      console.log("dispatching..", categoryInput, topPrice, bottomPrice);
      dispatch(
        productActions.filterSearchWithParams({
          category: categoryInput,
          rangeTop: topPrice,
          rangeBottom: bottomPrice,
        })
      );
    }
    firstExecution = false;
  };

  const topPriceInputHandler = (event) => {
    console.log("top price change", event.target.value);
    setTopPrice(event.target.value);
  };

  const bottomPriceInputHandler = (event) => {
    console.log("bottom price change", event.target.value);
    setBottomPrice(event.target.value);
  };

  return (
    <div>
      <label htmlFor="category">Choose category</label>
      <select
        name="category"
        id="category"
        ref={categoryRef}
        onChange={filterInputHandler}
      >
        <FilterOptions categories={Array.from(categories)} />
      </select>
      <hr />
      <span>Price range : </span>

      <label htmlFor="priceBottom">From</label>
      <input
        type="number"
        id="priceBottom"
        name="priceBottom"
        min="0"
        max="1000"
        step="50"
        value={bottomPrice}
        onChange={bottomPriceInputHandler}
      ></input>

      <label htmlFor="priceTop">To</label>
      <input
        type="number"
        id="priceTop"
        name="priceTop"
        min="0"
        step="50"
        value={topPrice}
        max="1000"
        onChange={topPriceInputHandler}
      ></input>

      <hr />

      <input
        type="checkbox"
        id="applyfilter"
        name="applyfilter"
        value="Filter"
        onChange={checkedListener}
      />
      <label htmlFor="applyfilter"> Apply filter </label>
    </div>
  );
};

export default Filter;
