import React from "react";
// import "./login/Form.css";
import "./index.css";
// import './App.css'
import groupo from "./form/groupo.png";
import { IconContext } from "react-icons";
import { HeaderAcceuil } from "./components/logo/HeaderAcceuil";

import Form from "./form/Form";

function App() {
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
    </>
  );
}
export default App;
