import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonPlus } from "react-icons/bs";
import Validate from "../Validate";
import { supabase } from "../../supabase";
// import { useAuth } from "../../supabase/Auth";
import { useNavigate } from "react-router-dom";

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
  // const [isSubmit, setIsSubmit] = useState(false);

  // set loading
  // const [loading, setLoading] = useState(true);

  // when change our field then emty
  // const signUp = useAuth();
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target);
    //''''''distruct the object
    const { name, value } = e.target;
    // change all form values and get just name with value in
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
    setFormErrors(Validate(formValues));
  };
  // when submiting
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(object);
    const { user, error } = await supabase.auth.signUp({
      email: formValues.email,
      username: formValues.username,
      departement: formValues.departement,
      password: formValues.password,
    });
    console.log(user);
    const { data } = await supabase.from("profile").insert([
      {
        email: formValues.email,
        username: formValues.username,
        departement: formValues.departement,
        user_id: user.id,
      },
    ]);
    console.log(data);

    console.log(error);

    navigate("/profile");
    console.log(formValues);
  };
  // in submitting

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     // getProfile();
  //     // console.log(formValues);
  //   }
  // }, [formErrors, isSubmit, formValues]);

  return (
    <form onSubmit={handleSubmit} className="register-form">
      {/* verfiy ur object  */}
      {/* <div>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      </div> */}
      <div className="fieldInput">
        <label htmlFor="text">Nom / Pr??nom</label>
        <div className="fullName">
          <span>
            <BsPersonPlus />
          </span>
          <input
            type="text"
            placeholder="Entrer votre Nom et Pr??nom"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            // readOnly={true}
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
            type="text"
            placeholder="Entrer votre adress mail"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <span className="errors">{formErrors.email} </span>
      </div>
      <div className="fieldInput">
        <label htmlFor="text">D??partement</label>
        <div className="departement">
          <span>
            <HiOutlineOfficeBuilding />
          </span>
          <input
            type="text"
            placeholder="Entrer votre d??partement"
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
      <input type="submit" value="S'inscrire" className="register-submit" />
    </form>
  );
};

export default Register;
