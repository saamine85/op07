import React from "react";
<<<<<<< HEAD
import groupo from "../../assets/groupo.png";
// import GetCouverture from "../../components/Couverture/GetCouverture";
=======
// import groupo from "../../assets/groupo.png";
import GetCouverture from "../../components/Couverture/GetCouverture";
>>>>>>> f7af2e0331f2d2ff5e024012b98545c49886eaa6
// import Couverture from "../Couverture/Couverture";
import "./mainprofile.css";
const MainProfile = () => {
  // const userName = "John Doe";
  return (
    <>
      <div className="content">
<<<<<<< HEAD
        <div className="couverture">
          <img src={groupo} alt="" />
          {/* <button>Changer</button> */}
          <label htmlFor="addCouverture" style={{ cursor: "pointer" }}>
            <span>Changer</span>
            <input type="file" id="addCouverture" style={{ display: "none" }} />
          </label>
        </div>
        {/* <GetCouverture /> */}
=======
        <GetCouverture />
>>>>>>> f7af2e0331f2d2ff5e024012b98545c49886eaa6
      </div>
    </>
  );
};

export default MainProfile;
  
