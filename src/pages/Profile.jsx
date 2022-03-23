import React from "react";
import { HeaderPages } from "../components/header/HeaderPages";
import Sidebar from "../components/sidebare/Sidebar";
import MainProfile from "../components/main/MainProfile";
const Profile = () => {
  return (
    <>
      <div className="fixed">
        <div className="container">
          <HeaderPages />
          {/* <MainProfile /> */}
        </div>
      </div>
      {/* <button>Supprimer votre compte</button> */}
      <div className="container">
        <section className="mainProfile">
          <Sidebar />
          <MainProfile />
        </section>
      </div>

      {/* <div className="container">
      </div> */}
    </>
  );
};

export default Profile;
