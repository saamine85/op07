import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { useAuth } from "../../supabase/Auth";
import { useNavigate } from "react-router-dom";

// import Validate from "../Validate";

const Login = () => {
  const error = "vous n'avez pas de compte";
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    // signIn();
    const { error } = await signIn({ email, password });//
    if (error) return error;
    navigate("/profile");
    // // const user = await supabase.signUp(formValues);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="fieldInput">
        <label htmlFor="email">Email</label>
        <div className="email">
          <span>
            <BsEnvelope />
          </span>
          <input
            type="email"
            placeholder="Entrer votre adress mail"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
      </div>
      <div className="fieldInput">
        <label htmlFor="password">Mot de passe</label>
        <div className="password">
          <span>
            <BiLock />
          </span>
          <input
            type="password"
            placeholder="Entrer votre mot de passe"
            onChange={(e) => setpassword(e.target.value)}
          />
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
