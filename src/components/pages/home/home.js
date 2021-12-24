import React from "react";
import Filter from "../../UI/Filters/Filter";
import MainNavigation from "../../UI/MainNavigation";
import Products from "../../UI/Products/Products";

const Home = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <div>
        <Filter  />
        <Products />
      </div>
    </React.Fragment>
  );
};

export default Home;
