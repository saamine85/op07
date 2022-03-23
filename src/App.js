import React from "react";
// import "./login/Form.css";
import "./index.css";

// import './App.css'

import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
        <Route path="*" element={<Error />} />

        {/* for nested route */}
        {/* <Route path="profile/post" element={<Posts />} />
        <Route path="profile/post/home" element={<App />} /> */}
        {/* for nested route */}
        {/* <Routes>
        <Route path="/:testNumber" element={<Test />} />
      </Routes> */}
      </Routes>
    </>
  );
}
export default App;
