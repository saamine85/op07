// import React from "react";
// import { useState, useEffect } from "react";
// import { MdOutlineAddAPhoto } from "react-icons/md";
// import { supabase } from "../../supabase";
// import "./avatar.css";
// const AvatarUrl = () => {
//   const [loading, setLoading] = useState(false);
//   const [currentUser, setCurrentUser] = useState();
//   const [avatarPublicUrl, setAvatarUrl] = useState();
//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = supabase.auth.user();
//       if (user) {
//         const { data } = await supabase.from("profile").select("*").single();
//         user.details = data;
//       }
//       console.log(`user`, user);
//       setCurrentUser(user);
//     };
//     fetchUser();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const formData = new FormData(e.target);
//     await supabase
//       .from("profile")
//       // .update({ full_name: formData.get("fullName") })
//       .match({ id: currentUser.details.id });
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     setLoading();
//     const formData = new FormData(e.target);
//     const avatarFile = formData.get("avatar");
//     const {
//       data: { Key: avatarKey },
//     } = await supabase.storage
//       .from("avatars")
//       .upload(`${currentUser.id}/${avatarFile.name}`, formData.get("avatar"), {
//         cacheControl: "3600",
//         //replace file
//         upsert: true,
//       });
//     console.log(avatarKey);
//     const { publicURL } = supabase.storage
//       .from("avatars")
//       .getPublicUrl(`${currentUser.id}/${avatarFile.name}`);
//     setAvatarUrl(publicURL);
//     console.log(`publicURL`, publicURL);
//     await supabase
//       .from("profile")
//       .update({ avatar_url: avatarKey })
//       // .update({ avatar_url: publicURL })
//       .match({ id: currentUser.details.id });
//   };

//   return (
//     <div>
//       hi its me avatar
//       <>
//         <div>
//           {/* <p className="description">Login</p> */}
//           {/* <div className="form-control">
//               <label className="label">
//                 <span classame="label-text">Your profile</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered"
//                 value={currentUser?.email}
//                 disabled
//               />
//             </div> */}
//           {/* <div className="form-control">
//               <label className="label">
//               <span className="label-text">Full name</span>
//               </label>
//               <input
//               type="text"
//               name="fullName"
//               placeholder={currentUser?.details?.full_name}
//               />
//             </div> */}
//           {/* <p>{currentUser?.details?.avatar_url}</p> */}
//           {/* <div>
//               <button type="submit" disabled={loading}>
//               <span>{loading ? "Loading" : "Update profile"}</span>
//               </button>
//             </div> */}
//           <form onSubmit={handleUpload} className="addImage">
//             <div className="addavatar">
//               {avatarPublicUrl && <img src={avatarPublicUrl} alt="" />}
//               {loading ? (
//                 "Loading"
//               ) : (
//                 <label htmlFor="single" style={{ cursor: "pointer" }} d>
//                   <MdOutlineAddAPhoto />
//                   <input
//                     type="file"
//                     id="single"
//                     name="avatar"
//                     disabled={loading}
//                     style={{ display: "none" }}
//                   />
//                 </label>
//               )}
//             </div>
//             {/* <button className="uploadAvatar" disabled={loading}>
//               uploadAvatar
//             </button> */}
//             <input type="submit" className="uploadAvatar" disabled={loading} />
//           </form>
//         </div>
//       </>
//     </div>
//   );
// };

// export default AvatarUrl;



// // avatar sans form

//   // const [avatarUrl, setavatarUrl] = useState(null);
//   // const [uploading, setUploading] = useState(false);

//   // useEffect(() => {
//   //   if (url) downloadImage(url);
//   // }, [url]);

//   // const downloadImage = async (path) => {
//   //   try {
//   //     const { data, error } = await supabase.storage
//   //       .from("avatars")
//   //       .download(path);
//   //     if (error) {
//   //       throw error;
//   //     }
//   //     const url = URL.createObjectURL(data);
//   //     setavatarUrl(url);
//   //   } catch (error) {
//   //     console.log("Error downloading image: ", error.message);
//   //   }
//   // };

//   // const uploadAvatar = async (event) => {
//   //   const user = supabase.auth.user();
//   //   try {
//   //     setUploading(true);

//   //     if (!event.target.files || event.target.files.length === 0) {
//   //       throw new Error("You must select an image to upload.");
//   //     }

//   //     const file = event.target.files[0];
//   //     const fileExt = file.name.split(".").pop();
//   //     const fileName = `${Math.random()}.${fileExt}`;
//   //     const filePath = `${fileName}`;

//   //     let { error: uploadError } = await supabase.storage
//   //       .from("avatars")
//   //       .upload(filePath, file);

//   //     if (uploadError) {
//   //       throw uploadError;
//   //     }

//   //     onUpload(filePath);
//   //     console.log(file);
//   //     console.log(filePath);
//   //     const { publicURL } = supabase.storage
//   //       .from("avatars")
//   //       .getPublicUrl(`${user.id}/${file.name}`);
//   //     setavatarUrl(publicURL);
//   //     console.log(`publicURL`, publicURL);
//   //     await supabase
//   //       .from("profile")
//   //       .update({ avatar_url: publicURL })
//   //       // .update({ avatar_url: publicURL })
//   //       .match({ id: user.id });
//   //   } catch (error) {
//   //     alert(error.message);
//   //   } finally {
//   //     setUploading(false);
//   //   }
//   // };
