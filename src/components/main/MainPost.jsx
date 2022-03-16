import React from "react";
import "./mainprofile.css";
import { FaRegCommentDots } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

import groupo from "../../assets/groupo.png";

const MainPost = () => {
  const userName = "John Doe";
  const departement = "Ux-Designer";
  return (
    <>
      <div className="content">
        <div className="post">
          <div className="homeBare">
            <span>Ajouter votre post {userName}!</span>
          </div>
          <div className="userDetails">
            <img src={groupo} alt="" />
            <div className="details">
              <span>{userName}</span>
              <span style={{ color: "#b8b6b6", fontSize: ".9rem" }}>
                {departement}
              </span>
            </div>
          </div>
          <div className="commentPost">
            <textarea name="" id=""></textarea>
            <div className="icons">
              <BsImages />
              <RiSendPlaneFill />
            </div>
          </div>
        </div>
        <div className="allPosts">
          <div className="icons">
            <FaRegCommentDots />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPost;
