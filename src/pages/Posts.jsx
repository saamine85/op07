import React from "react";
import SidebarPost from "../components/sidebare/SidebarPost";

import { HeaderPages } from "../components/header/HeaderPages";
import MainPost from "../components/main/MainPost";
const Posts = () => {
  return (
    <>
      <div className="fixed">
        <div className="container">
          <HeaderPages />
        </div>
      </div>
      <div className="container">
        <section className="mainProfile">
          <SidebarPost />
          <MainPost />
        </section>
      </div>
    </>
  );
};

export default Posts;
