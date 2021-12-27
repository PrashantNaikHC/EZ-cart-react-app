import React from "react";
import classes from "./PriceInfo.module.css";

const PriceInfo = (props) => {
  console.log("details", props.cartDetails);

  const priceTable = props.cartDetails.map((item) => (
    <li>
      <section className={classes.pricerow}>
        <div>
          <i>{item.title}</i>
        </div>
        <div>
          <strong>${item.price}</strong>
        </div>
      </section>
    </li>
  ));

  function add(acc, a) {
    return acc + a;
  }

  const totalPrice = props.cartDetails.map((item) => item.price).reduce(add, 0);

  return (
    <React.Fragment>
      {priceTable}
      <hr />
      <section className={classes.pricerow}>
        <div>Total</div>
        <div>
          <strong>${totalPrice}</strong>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PriceInfo;
