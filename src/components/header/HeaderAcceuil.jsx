import React from "react";
import "./HeaderAcceuil.css";

import Logogm from "./icon.svg";
export const HeaderAcceuil = () => {
  return (
    <div className="logoAcceuil">
      <img src={Logogm} alt="" />
      <h1>Groupomania</h1>
    </div>
  );
};
