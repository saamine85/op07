import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink  to="/Profile">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink  to="/Posts">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Se déconnecter</NavLink>
            {/* pour tester les useparams */}
            {/* <Link to="/test/45">Se déconnecter</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
