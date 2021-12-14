import React from "react";
import useInput from "../../../hooks/use-input";
import classes from "./Register.module.css";

const nameValidator = (name) => {
  return name.length > 0;
};

const emailValidator = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// should be more than 8 chars
const passwordValidator = (password) => {
  return password.length > 8;
};

// should be 10 numbers
const phoneValidator = (password) => {
  return password.length === 10;
};

const Register = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(nameValidator);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(nameValidator);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValidator);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(passwordValidator);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(phoneValidator);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredPasswordIsValid
    ) {
      return;
    }
    console.log(enteredEmail);
  };


  const emailInputClasses = emailInputHasError ? "errorInput" : "input";
  const passwordInputClasses = passwordInputHasError ? "errorInput" : "input";
  const firstNameInputClasses = firstNameInputHasError ? "errorInput" : "input";
  const lastNameInputClasses = lastNameInputHasError ? "errorInput" : "input";
  const phoneInputClasses = phoneInputHasError ? "errorInput" : "input";

  return (
    <React.Fragment>
      <h1 className={classes.h1}>EZ Cart</h1>
      <form className={classes.form} onSubmit={onSubmitHandler}>

        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="firstname">
            First Name
          </label>
          <input
            className={firstNameInputClasses}
            id="firstname"
            type="text"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameInputHasError && (
            <p className={classes.error}>Please enter a valid name.</p>
          )}
        </div>
        <br />

        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="lastname">
            Last Name
          </label>
          <input
            className={lastNameInputClasses}
            id="lastname"
            type="text"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && (
            <p className={classes.error}>Please enter a valid name.</p>
          )}
        </div>
        <br />

        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            className={emailInputClasses}
            id="email"
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

        <div className={classes.inputBlock}>
          <label className={classes.label} htmlFor="phone">
            Mobile
          </label>
          <input
            className={phoneInputClasses}
            id="phone"
            type="number"
            value={enteredPhone}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          {phoneInputHasError && (
            <p className={classes.error}>Please enter a valid phone number.</p>
          )}
        </div>

        <br />
        <button className={classes.button} id="submit" type="submit">
          Register
        </button>
      </form>
    </React.Fragment>
  );
};

export default Register;
