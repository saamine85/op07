import React from "react";
import groupo from "../../assets/groupo.png";
import "./mainprofile.css";

const MainProfile = () => {
  // const userName = "John Doe";
  return (
    <>
      <div className="content">
        {/* <h1>Bienvenue {userName} !</h1> */}
        <div className="couverture">
          <img src={groupo} alt="" />
          <label htmlFor="addCouverture" style={{ cursor: "pointer"}}>
            <span>Changer</span>
            <input type="file" id="addCouverture" style={{display:"none"}} />
          </label>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
