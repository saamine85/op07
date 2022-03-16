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
          <button>Changer</button>
        </div>
      </div>
    </>
  );
};

export default MainProfile;
