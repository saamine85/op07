import "./Form.css";
import Login from "./Login";
import Register from "./Register";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Form = () => {
  // const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
  const [registrationForm, setRegistrationForm] = useState(false);
  const loginProps = useSpring({
    left: registrationForm ? -500 : 0, // Login form sliding positions
    // opacity: registrationForm ? 0 : 1,
  });
  const registerProps = useSpring({
    left: registrationForm ? 0 : 500, // Register form sliding positions
    // opacity: registrationForm ? 1 : 0,
  });

  function registerClicked() {
    // alert("register clicked");
    setRegistrationForm(true);
  }
  function loginClicked() {
    // alert("login clicked");
    setRegistrationForm(false);
  }
  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <button onClick={loginClicked} id="loginBtn">
          Se connecter
        </button>
        <button onClick={registerClicked} id="registerBtn">
          S’inscrire
        </button>
      </div>
      <div className="form-group">
        <animated.div id="loginform" style={loginProps}>
          <Login />
        </animated.div>
        <animated.div id="registerform" style={registerProps}>
          <Register />
        </animated.div>
      </div>
    </div>
  );
};
export default Form;
