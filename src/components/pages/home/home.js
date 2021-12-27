import React from "react";
import Filter from "../../UI/Filters/Filter";
import MainNavigation from "../../UI/MainNavigation";
import Products from "../../UI/Products/Products";
import classes from "./home.module.css";

const Home = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <div className="row">
        <div className={classes.col3 }>
          <Filter />
        </div>
        <div className={classes.col9}>
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
