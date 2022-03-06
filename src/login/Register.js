import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonPlus } from "react-icons/bs";

const RegisterForm = () => {
  return (
    <form className="register-form" action="">
      <div className="form">
        <label htmlFor="text">Nom / Prénom</label>
        <div className="fullName">
          <span>
            <BsPersonPlus />
          </span>
          <input type="text" placeholder="Entrer votre Nom et Prénom" />
        </div>
      </div>
      <div className="form">
        <label htmlFor="email">Email</label>
        <div className="email">
          <span>
            <BsEnvelope />
          </span>
          <input type="email" placeholder="Entrer votre adress mail" />
        </div>
      </div>
      <div className="form">
        <label htmlFor="text">Département</label>
        <div className="departement">
          <span>
            <HiOutlineOfficeBuilding />
          </span>
          <input type="email" placeholder="Entrer votre adress mail" />
        </div>
      </div>
      <div className="form">
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
      <input type="submit" value="S'enregistrer" className="submit" />
    </form>
  );
};

export default RegisterForm;
