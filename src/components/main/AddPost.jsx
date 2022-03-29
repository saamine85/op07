import React, { useEffect, useState } from "react";
import "./mainPost.css";

// import { FaRegCommentDots } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { FaCommentDots } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
// import Post from "../Post/Post";
// import GetAvatar from "../Avatar/GetAvatar";
import { supabase } from "../../supabase";

const AddPost = () => {
  const username = "JohnDoe";
  const departement = "Ux designer";

  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [session, setSession] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const fetchPosts = async () => {
    let { data: posts } = await supabase.from("posts").select("*");
    setPosts(posts);
  };
  const handleSubmit = async () => {
    //post content to supabase
    await supabase.from("posts").insert({ content, user_id: session.user.id });

    setContent("");
    fetchPosts(); // you can here just listening to changes in database
  };
  const handleDelete = async () => {
    //post content to supabase
    await supabase
      .from("posts")
      .delete()
      .eq({ content, user_id: session.user.id });
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="content">
      <div className="post">
        <div className="homeBare">
          <span>Ajouter votre post !</span>
          {/* {console.log(profile)} */}
        </div>
        <div className="userDetails">
          <div className="mainAvatar">
            <div className="imageAvatar">
              {/* <img src={GetAvatar} alt="" /> */}
              {/* <GetAvatar/> */}
            </div>
          </div>
          <div className="details">
            <span>{username}</span>
            <span style={{ color: "#b8b6b6", fontSize: ".9rem" }}>
              {departement}
            </span>
          </div>
        </div>
        <div className="commentPost">
          <textarea
            name=""
            id=""
            value={content}
            onChange={handleContent}
          ></textarea>
          <div className="icons">
            <div className="addAvatar">
              <label htmlFor="avatar" style={{ cursor: "pointer" }}>
                <BsImages style={{ fill: "#f3a712" }} />
              </label>
              <input
                type="file"
                id="avatar"
                accept="image/*"
                style={{ display: "none" }}
                // onChange={uploadAvatar}
                // disabled={uploading}
              />
            </div>
            <RiSendPlaneFill
              style={{ fill: "#f3a712" }}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
      <div className="homeBare">
        <span>Tout les posts !</span>
        {/* {console.log(profile)} */}
      </div>
      <div>
        {posts.map((post) => (
          <>
            <div className="allPost">
              <div className="userDetails">
                <div className="mainAvatar">
                  <div className="imageAvatar">
                    {/* <img src={GetAvatar} alt="" /> */}
                    {/* <GetAvatar/> */}
                  </div>
                </div>
                <div className="details">
                  <span>{username}</span>
                  <span style={{ color: "#b8b6b6", fontSize: ".9rem" }}>
                    {departement}
                  </span>
                </div>
              </div>
              <div key={post.content}>
                <div className="allContent">{post.content}</div>
              </div>
              <div className="iconsNav">
                <div className="icons">
                  <FaCommentDots
                    style={{ fill: "#f3a712" }}
                    // onClick={handleSubmit}
                  />
                  <div className="addAvatar">
                    <label htmlFor="avatar" style={{ cursor: "pointer" }}>
                      <RiHeartLine style={{ fill: "#f3a712" }} />
                    </label>
                    <input
                      type="file"
                      id="avatar"
                      accept="image/*"
                      style={{ display: "none" }}
                      // onChange={uploadAvatar}
                      // disabled={uploading}
                    />
                  </div>
                  <BsBookmarkPlus
                    style={{ fill: "#f3a712" }}
                    // onClick={handleSubmit}
                  />
                </div>
                <RiDeleteBin6Line
                  style={{ fill: "#f3a712", marginLeft: "" }}
                  onClick={handleDelete}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default AddPost;
