import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
// import { FaRegCommentDots } from "react-icons/fa";
// import { BsImages } from "react-icons/bs";
// import { RiSendPlaneFill } from "react-icons/ri";

// import groupo from "../../assets/groupo.png";
const Post = () => {
  // const userName = "John Doe";
  // const departement = "Ux-Designer";
  // const submitPost = () => {};
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
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <>
      {session ? (
        <div className="homeBare">
          <span>Lire tout les posts</span>
          <div>
            <input type="text" value={content} onChange={handleContent} />
            <button onClick={handleSubmit}>Add post</button>
          </div>
          {posts.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Post;
