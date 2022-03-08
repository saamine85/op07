import React from "react";
import { Link } from "react-router-dom";
import Logogm from "./icon.svg";
import "./HeaderPages.css";
// import Navbar from "../navigation/Navbar.css"

export const HeaderPages = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logogm} alt="" />
        <h1>Groupomania</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Posts">Posts</Link>
          </li>
          <li>
            <Link to="/">Se déconnecter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
