import React from "react";
import groupo from "../../assets/groupo.png";
// import GetCouverture from "../../components/Couverture/GetCouverture";
// import Couverture from "../Couverture/Couverture";
import "./mainprofile.css";
const MainProfile = () => {
  // const userName = "John Doe";
  return (
    <>
      <div className="content">
        <div className="couverture">
          <img src={groupo} alt="" />
          {/* <button>Changer</button> */}
          <label htmlFor="addCouverture" style={{ cursor: "pointer" }}>
            <span>Changer</span>
            <input type="file" id="addCouverture" style={{ display: "none" }} />
          </label>
        </div>
        {/* <GetCouverture /> */}
      </div>
    </>
  );
};

export default MainProfile;
  
