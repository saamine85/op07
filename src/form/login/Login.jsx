import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";

const Login = () => {
  return (
    <form className="login-form">
      <div className="fieldInput">
        <label htmlFor="email">Email</label>
        <div className="email">
          <span>
            <BsEnvelope />
          </span>
          <input type="email" placeholder="Entrer votre adress mail" />
        </div>
      </div>
      <div className="fieldInput">
        <label htmlFor="password">Mot de passe</label>
        <div className="password">
          <span>
            <BiLock />
          </span>
          <input type="password" placeholder="Entrer votre mot de passe" />
          <span>
            <HiEyeOff />
          </span>
        </div>
      </div>
      <input type="submit" value="Se connecter" className="login-submit" />
    </form>
  );
};
export default Login;
