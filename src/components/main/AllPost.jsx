// import React, { useEffect, useState } from "react";
// import "./mainPost.css";

// // import { FaRegCommentDots } from "react-icons/fa";
// import { BsImages } from "react-icons/bs";
// import { RiSendPlaneFill } from "react-icons/ri";
// import Post from "../Post/Post";
// import GetAvatar from "../Avatar/GetAvatar";
// import { supabase } from "../../supabase";

// const AllPost = () => {
//   // const [profile, setProfile] = useState("");
//   // // const userName = "John Doe";
//   // // const departement = "Ux-Designer";
//   // // const username  = profile[0];
//   // const submitPost = () => {};
//   // // console.log(GetAvatar)
//   // useEffect(() => {
//   //   fetchProfile();
//   // }, []);
//   // const fetchProfile = async () => {
//   //   let { data: profile } = await supabase.from("profile").select("*");
//   //   setProfile(profile);
//   // };
//   // console.log(profile);
//   // let user = {
//   //   username: profile[0].username,
//   //   departement: profile[0].departement,
//   //   email: profile[0].email,
//   // };
//   // // let user = profile.map((obj) => obj.username);
//   // // console.log(user);
//   const [posts, setPosts] = useState([]);
//   const [session, setSession] = useState();

//   useEffect(() => {
//     fetchPosts();
//   }, []);
//   useEffect(() => {
//     setSession(supabase.auth.session());

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);
//   const fetchPosts = async () => {
//     let { data: posts } = await supabase.from("posts").select("*");
//     setPosts(posts);
//   };
//   const handleSubmit = async () => {
//     //post content to supabase
//     await supabase.from("posts").insert({ content, user_id: session.user.id });

   
//     fetchPosts(); // you can here just listening to changes in database
//   };
//   return (
//     <div className="content">
//       <div className="post">
//         <div className="homeBare">
//           <span>tout les posts</span>
//           {/* {console.log(profile)} */}
//         </div>
//         <div className="userDetails">
//           <div className="mainAvatar">
//             <div className="imageAvatar">
//               {/* <img src={GetAvatar} alt="" /> */}
//               {/* <GetAvatar/> */}
//             </div>
//           </div>
//           <div className="details">
//             {/* <span>{user.username}</span> */}
//             <span style={{ color: "#b8b6b6", fontSize: ".9rem" }}>
//               {/* {departement} */}
//             </span>
//           </div>
//         </div>
//         <div className="commentPost">
//           {posts.map((post) => (
//             <div key={post.id}>{post.content}</div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllPost;
// // {/* <div className="content">
// //           <div className="post">
// //             <div className="homeBare">
// //               <span>tout les posts</span>
// //               {/* {console.log(profile)} */}
// //             </div>
// //             <div className="userDetails">
// //               <div className="mainAvatar">
// //                 <div className="imageAvatar">
// //                   {/* <img src={GetAvatar} alt="" /> */}
// //                   {/* <GetAvatar/> */}
// //                 </div>
// //               </div>
// //               <div className="details">
// //                 {/* <span>{user.username}</span> */}
// //                 <span style={{ color: "#b8b6b6", fontSize: ".9rem" }}>
// //                   {/* {departement} */}
// //                 </span>
// //               </div>
// //             </div>
// //             <div >
// //               {posts.map((post) => (
// //                 <div key={post.id}>{post.content}</div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div> */}