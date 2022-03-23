import React from "react";
import Sidebar from "../components/sidebare/Sidebar";

import { HeaderPages } from "../components/header/HeaderPages";
import AddPost from "../components/main/AddPost";
import { AuthProvider } from "../supabase/Auth";

const Posts = () => {
  return (
    <>
      <AuthProvider>
        <div className="fixed">
          <div className="container">
            <HeaderPages />
          </div>
        </div>
        <div className="container">
          <section className="mainProfile">
            <Sidebar />
            <AddPost />
          </section>
        </div>
      </AuthProvider>
    </>
  );
};

export default Posts;
