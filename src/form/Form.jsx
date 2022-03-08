import "./Form.css";
import Login from "./login/Login";
import Register from "./register/Register";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Form = () => {
  const [registerForm, setRegisterForm] = useState(false);
  const [LoginForm, setLoginForm] = useState(true);
  const loginProps = useSpring({
    // left: registrationForm ? 0 : -500, // Register form sliding positions
    left: LoginForm ? 0 : -500,
    // Login form sliding positions
    // opacity: registrationForm ? 0 : 1,
  });
  const registerProps = useSpring({
    left: registerForm ? 0 : 500,
    // right: LoginForm ? 0 : -500, // Register form sliding positions
    // Register form sliding positions
    // opacity: registrationForm ? 1 : 0,
  });

  function loginClicked() {
    // alert("login clicked");
    setLoginForm(true);
    setRegisterForm(false);
  }
  function registerClicked() {
    // alert("register clicked");
    setLoginForm(false);
    setRegisterForm(true);
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
      {/* <div className="form-group"> */}
      <animated.div id="loginform" style={loginProps}>
        <Login />
      </animated.div>
      <animated.div id="registerform" style={registerProps}>
        <Register />
      </animated.div>
      {/* </div> */}
    </div>
  );
};
export default Form;
