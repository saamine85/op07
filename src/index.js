import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Profile from "./pages/Profile";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
