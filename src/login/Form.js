import "./Form.css";
import LoginForm from "./Login";
import RegisterForm from "./Register";
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
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
    </div>
  );
};
export default Form;
