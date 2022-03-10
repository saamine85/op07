import React, { useEffect, useState } from "react";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { HiEyeOff } from "react-icons/hi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsPersonPlus } from "react-icons/bs";
import Validate from "../Validate";
// import { supabase } from "../../supabase/supabase";

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

  // set loading
  // const [loading, setLoading] = useState(true);

  // when change our field then emty
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(object);
    setFormErrors(Validate(formValues));
    console.log(formValues);
    setIsSubmit(true);
  };
  // in submitting

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // getProfile();
    }
  }, [formErrors, isSubmit, formValues]);

  // validation form that take values as a parameter
  // const getProfile = async () => {
  //   try {
  //     setLoading(true);
  //     const user = supabase.auth.user();

  //     let { data, error, status } = await supabase
  //       .from("profiles")
  //       .select(`username, email, departement,password`)
  //       .eq("id", user.id)
  //       .single();

  //     if (error && status !== 406) {
  //       throw error;
  //     }

  //     if (data) {
  //       setFormValues();
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const updateProfile = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     const user = supabase.auth.user();

  //     const updates = {
  //       id: user.id,
  //       username,
  //       website,
  //       avatar_url,
  //       updated_at: new Date(),
  //     };

  //     let { error } = await supabase.from("profiles").upsert(updates, {
  //       returning: "minimal", // Don't return the value after inserting
  //     });

  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <form onSubmit={handleSubmit} className="register-form">
      {/* verfiy ur object  */}
      {/* <div>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      </div> */}
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
            type="text"
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
      <input type="submit" value="S'inscrire" className="register-submit" />
    </form>
  );
};

export default Register;
