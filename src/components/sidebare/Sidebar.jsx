import React from "react";
// import { Link } from "react-router-dom";
import Logogm from "../header/icon.svg";
import { MdOutlineAddAPhoto } from "react-icons/md";
import"./Sidebar.css"

const Sidebar = () => {
const userName ="Hello world"
const departement ="ux-designer"
const email ="johndo@foo.com"


  return (
    <div className="side-bar">
      <h1>Profile</h1>
      <div className="imgProfile">
        <img src={Logogm} alt="" />
        <div className="addPhoto">
          <MdOutlineAddAPhoto />
        </div>
      </div>
      <div className="info">
        <p>{userName}</p>
        <p> {departement} </p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Sidebar;