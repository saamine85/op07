import React from "react";
// import "./login/Form.css";
import "./index.css";
// import './App.css'
import groupo from "./login/groupo.png";
import { IconContext } from "react-icons";
import { Header } from "./components/logo/Header";

import Form from "./login/Form";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="main">
        <div className="image">
          <img src={groupo} alt="" />
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
