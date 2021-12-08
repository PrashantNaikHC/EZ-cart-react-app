import React, { useState, useEffect } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPassowordIsValid] = useState(false);

  // runs after the render
  // runs only for the first time if provided with empty array(no dependencies), runs everytime otherwise
  useEffect(() => {
    console.log("effect run");
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // return function runs prior and clears the previous instance of timer
    // for emtpy array(no dependencies), will run once the component is removed from dom
    return () => {
      console.log("Cleanup of timer");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  // todo: can be moved to utils
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const emailHandler = (event) => {
    if (validateEmail(event.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const passwordHandler = (event) => {
    if (event.target.value.length > 8) {
      setPassowordIsValid(true);
    } else {
      setPassowordIsValid(false);
    }
  };

  let loginButton;
  if (formIsValid) {
    loginButton = (
      <button className={classes.button} id="submit" type="submit">
        Login
      </button>
    );
  } else {
    loginButton = (
      <button className={classes.button} id="submit" type="submit" disabled>
        Login
      </button>
    );
  }

  return (
    <React.Fragment>
      <h1 className={classes.h1}>EZ Cart</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            className={classes.input}
            id="username"
            type="text"
            onChange={emailHandler}
          />
        </div>
        <br />
        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            className={classes.input}
            id="password"
            type="text"
            onChange={passwordHandler}
          />
        </div>
        <br />
        {loginButton}
        <br />
        <button className={classes.button} id="submit" type="submit">
          Register
        </button>
      </form>
      {console.log("render run")}
    </React.Fragment>
  );
};

export default Login;
