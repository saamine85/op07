import React from "react";
import { HeaderPages } from "../components/header/HeaderPages";
import Sidebar from "../components/sidebare/Sidebar";

const Profile = () => {
  return (
    <>
      <div className="container">
        <HeaderPages />
      </div>
      <div className="container">
        <Sidebar />
      </div>
    </>
  );
};

export default Profile;
