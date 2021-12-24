import React from "react";

const FilterOptions = ({ categories }) => {
  return categories.map((category) => <option>{category}</option>);
};

export default FilterOptions;
