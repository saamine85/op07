import React from "react";
import SidebarPost from "../components/sidebare/SidebarPost";

import { HeaderPages } from "../components/header/HeaderPages";
const Posts = () => {
  return (
    <>
      <div className="container">
        <HeaderPages />
      </div>
      <div className="container">
        <SidebarPost />
      </div>
    </>
  );
};

export default Posts;
