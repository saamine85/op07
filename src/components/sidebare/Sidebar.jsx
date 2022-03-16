import React from "react";
// import { Link } from "react-router-dom";
import groupo from "../../assets/groupo.png";

// import Logogm from "../header/icon.svg";
import { MdOutlineAddAPhoto } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const userName = "John Doe";
  const departement = "ux-designer";
  const email = "johndo@foo.com";

  return (
    <>
      <div className="side-bar">
        <h1>Profile</h1>
        <div className="imgProfile">
          <img src={groupo} alt="" />
          <div className="addAvatar">
            <MdOutlineAddAPhoto />
          </div>
        </div>
        <div className="info">
          <p>{userName}</p>
          <p> {departement} </p>
          <p>{email}</p>
        </div>
          <button>Supprimer votre compte</button>
      </div>
    </>
  );
};

export default Sidebar;
