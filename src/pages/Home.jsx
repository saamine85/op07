import React from "react";
// import "./login/Form.css";
import "../styles/Home.css";
// import './App.css'
import groupo from "../assets/groupo.png";
import { IconContext } from "react-icons";
import { HeaderAcceuil } from "../components/header/HeaderAcceuil";
// import { supabase } from "../supabase/client";

import Form from "../form/Form";

const Home = () => {
  return (
    <>
      <div className="container">
        <HeaderAcceuil />
      </div>
      <div className="main">
        <div className="image">
          <img src={groupo} alt="logo" />
        </div>
        <IconContext.Provider value={{ color: "white", size: "1.1em" }}>
          <React.Fragment>
            <Form />
          </React.Fragment>
        </IconContext.Provider>
      </div>
      {console.log(
        `Supabase app url is :${process.env.REACT_APP_SUPABASE_URL}`
      )}
      {console.log(
        `Supabase app key is:${process.env.REACT_APP_SUPABASE_PUBLIC_KEY}`
      )}
      {/* {console.log(supabase)} */}
    </>
  );
};

export default Home;
