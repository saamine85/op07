import React from "react";
import "./Header.css";

import Logogm from "./icon.svg";
export const Header = () => {
  return (
    <header>
     <img src={Logogm} alt="" />
     <h1>Groupomania</h1>
    </header>
  );
};
