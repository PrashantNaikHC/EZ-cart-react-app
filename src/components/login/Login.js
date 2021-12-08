import React, { useState, useEffect } from "react";

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
      <button id="submit" type="submit">
        Login
      </button>
    );
  } else {
    loginButton = (
      <button id="submit" type="submit" disabled>
        Login
      </button>
    );
  }

  return (
    <React.Fragment>
      <h1>EZ Cart</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={emailHandler} />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="text" onChange={passwordHandler} />
        <br />
        {loginButton}
        <br />
        <button id="submit" type="submit">
          Register
        </button>
      </form>
      {console.log("render run")}
    </React.Fragment>
  );
};

export default Login;
