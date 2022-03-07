import React, { useEffect, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonPlus } from "react-icons/bs";

const Register = () => {
  //manage state to our inputfield
  // initiale values as object
  const initialValues = {
    username: "",
    email: "",
    departement: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  // create a state error with emty object in initial
  const [formErrors, setFormErrors] = useState({});
  // add another state when submiting
  const [isSubmit, setIsSubmit] = useState(false);

  // when change our field then emty
  const handleChange = (e) => {
    // console.log(e.target);
    //''''''distruct the object
    const { name, value } = e.target;
    // change all form values and get just name with value in
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  // when submiting
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(object);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // in submitting

  useEffect(() => {
    console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors,isSubmit,formValues]);

  // validation form that take values as a parameter
  const validate = (values) => {
    const errors = {};
    const regUser = /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/;
    const regDepartement = /^[A-Za-zÀ-ÿ ,.'-]{3,20}$/;
    const regEmail = /^[a-zA-Z0-9.-_]+@{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!values.username) {
      errors.username = "Ajouter votre nom et prénom";
    } else if (!regUser.test(values.username)) {
      errors.username = "Ajouter un prénom valid";
    }
    if (!values.email) {
      errors.email = "Ajouter Votre mail ";
    } else if (!regEmail.test(values.email)) {
      errors.email = "Ajouter un mail valid";
    }
    if (!values.departement) {
      errors.departement = "Ajouter votre département";
    } else if (!regDepartement.test(values.departement)) {
      errors.departement = "Ajouter un prénom valid";
    }
    if (!values.password) {
      errors.password = "Ajouter votre mot de passe";
    } else if (!regPassword.test(values.password)) {
      errors.password = "Ajouter un mot de passe valid";
    }
    return errors;
  };
  return (
    <>
      {/* verfiy ur object  */}
      {/* <div>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      </div> */}
      <form onSubmit={handleSubmit} className="register-form">
        <div className="fieldInput">
          <label htmlFor="text">Nom / Prénom</label>
          <div className="fullName">
            <span>
              <BsPersonPlus />
            </span>
            <input
              type="text"
              placeholder="Entrer votre Nom et Prénom"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <span className="errors">{formErrors.username}</span>
        </div>
        <div className="fieldInput">
          <label htmlFor="email">Email</label>
          <div className="email">
            <span>
              <BsEnvelope />
            </span>
            <input
              type="email"
              placeholder="Entrer votre adress mail"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <span className="errors">{formErrors.email} </span>
        </div>
        <div className="fieldInput">
          <label htmlFor="text">Département</label>
          <div className="departement">
            <span>
              <HiOutlineOfficeBuilding />
            </span>
            <input
              type="text"
              placeholder="Entrer votre département"
              name="departement"
              value={formValues.departement}
              onChange={handleChange}
            />
          </div>
          <span className="errors">{formErrors.departement}</span>
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
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <span>
              <HiEyeOff />
            </span>
          </div>
          <span className="errors">{formErrors.password}</span>
        </div>
        <input type="submit" value="S'inscrire" className="submit" />
      </form>
    </>
  );
};

export default Register;
