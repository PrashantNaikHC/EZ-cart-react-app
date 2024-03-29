import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import AuthContext from "../../../store/auth-context";
import classes from "./Login.module.css";

const userNameValidator = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const passwordValidator = (password) => {
  return password.length > 8;
};

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(userNameValidator);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidator);

  let formIsValid = false;

  // logic for the form validation
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredEmailIsValid || !enteredPasswordIsValid) {
      return;
    }
    if (formIsValid) {
      //fetchLogin();
    }
    authContext.login()
    history.replace("/products")
  };

  // todo: remove this code block later
  const fetchLogin = async () => {
    const loginResult = await fetch("http://localhost:8000/login");
    const loginData = await loginResult.json();
    console.log(loginData);
  };

  const userNameInputClasses = emailInputHasError ? "errorInput" : "input";
  const passwordInputClasses = passwordInputHasError ? "errorInput" : "input";
  console.log("Rendering component");

  if(!props.isLoggingIn) {
    authContext.logout();
  }

  return (
    <React.Fragment>
      <h1 className={classes.h1}>EZ Cart</h1>
      {!props.isLoggingIn && <p className={classes.h1}>You have logged out successfully. Login to explore products.</p>}
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="username">
            Username
          </label>
          <input
            className={userNameInputClasses}
            id="username"
            type="text"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className={classes.error}>Please enter a valid email address.</p>
          )}
        </div>
        <br />
        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            className={passwordInputClasses}
            id="password"
            type="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <p className={classes.error}>Please enter a valid password.</p>
          )}
        </div>
        <br />
        <button className={classes.button} id="submit" type="submit">
          Login
        </button>
        <br />
        <Link to="/register" style={{ textDecoration: "none" }}>
          <button className={classes.button} id="submit" type="submit">
            Register
          </button>
        </Link>
      </form>
    </React.Fragment>
  );
};

export default Login;