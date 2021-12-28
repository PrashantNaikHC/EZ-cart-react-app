import React from "react";
import Filter from "../../UI/Filters/Filter";
import MainNavigation from "../../UI/MainNavigation";
import Products from "../../UI/Products/Products";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col3">
          <Filter />
        </div>
        <div className="col9">
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
