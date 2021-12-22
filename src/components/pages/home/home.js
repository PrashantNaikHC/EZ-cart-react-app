import React from "react";
import MainNavigation from "../../UI/MainNavigation";
import Products from "../../UI/Products/Products";

const Home = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <Products />
    </React.Fragment>
  );
};

export default Home;
