// import { useState, useEffect } from "react";
// import { supabase } from "./supabase";
// export default function Profile() {
//   const [loading, setLoading] = useState(false);
//   const [currentUser, setCurrentUser] = useState();
//   const [avatarPublicUrl, setAvatarUrl] = useState();
//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = supabase.auth.user();
//       if (user) {
//         const { data } = await supabase.from("users").select("*").single();
//         user.details = data;
//       }
//       console.log(`user`, user);
//       setCurrentUser(user);
//     };
//     fetchUser();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     await supabase
//       .from("users")
//       .update({ full_name: formData.get("fullName") })
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
//       .from("users")
//       .update({ avatar_url: publicURL })
//       .match({ id: currentUser.details.id });
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={handleSubmit}>
//           <p className="description">Login</p>
//           <div className="form-control">
//             <label className="label">
//               <span classame="label-text">Your profile</span>
//             </label>
//             <input
//               type="email"
//               placeholder="email"
//               className="input input-bordered"
//               value={currentUser?.email}
//               disabled
//             />
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Full name</span>
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               placeholder={currentUser?.details?.full_name}
//             />
//           </div>
//           <div>
//             <button type="submit" disabled={loading}>
//               <span>{loading ? "Loading" : "Update profile"}</span>
//             </button>
//           </div>
//         </form>
//         <form onSubmit={handleUpload}>
//           {avatarPublicUrl && <img src={avatarPublicUrl} alt="" />}
//           <input type="file" name="avatar" />
//           <button type="submit" disabled={loading}>
//             <span>{loading ? "Loading" : "Upload avatar"}</span>
//           </button>
//         </form>
//       </div>
//       <p></p>
//     </>
//   );
// }

// // CREATE POLICY "policy_name"|
// // ON storage.objects FOR {operation} {USING | WITH CHECK} (
// //     -- restrict bucket
// //     bucket_id =    {bucket_name}
// //     and auth.uid()::text = (storage.foldername(name))[1]

// // import { createClient } from '@supabase/supabase-js'
// //  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// // const supabaseAnọnKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY



// //  export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// import { useEffect, useState } from "react";
// import { supabase } from "../../supabase";
// // import { supabase } from "./supabaseClient";
// // import VisuallyHidden from "@reach/visually-hidden";
// import { MdOutlineAddAPhoto } from "react-icons/md";
// import "./avatar.css";

// function Avatar() {
//   // const [avatarUrl, setavatarUrl] = useState(null);
//   // const [uploading, setUploading] = useState(false);
//   const [uploading, setupLoading] = useState(false);
//   const [currentUser, setCurrentUser] = useState();
//   const [avatarPublicUrl, setAvatarUrl] = useState();
//   // useEffect(() => {
//   //   if (url) downloadImage(url);
//   // }, [url]);
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

//   const uploadAvatar = async (e) => {
//     // try {
//     //   setUploading(true);

//     //   if (!event.target.files || event.target.files.length === 0) {
//     //     throw new Error("You must select an image to upload.");
//     //   }

//     //   const file = event.target.files[0];
//     //   const fileExt = file.name.split(".").pop();
//     //   const fileName = `${Math.random()}.${fileExt}`;
//     //   const filePath = `${fileName}`;

//     //   let { error: uploadError } = await supabase.storage
//     //     .from("avatars")
//     //     .upload(filePath, file);

//     //   if (uploadError) {
//     //     throw uploadError;
//     //   }

//     //   onUpload(filePath);
//     //   console.log(filePath);

//     // } catch (error) {
//     //   alert(error.message);
//     // } finally {
//     //   setUploading(false);
//     e.preventDefault();
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
//       .update({ avatar_url: publicURL })
//       .match({ id: currentUser.details.id });
//       // }
//       setupLoading();
//   };

//   return (
//     <div className="imgProfile"  aria-live="polite">
//       <div className="addImage">
//         {avatarPublicUrl && (
//           <img
//             src={avatarPublicUrl}
//             alt=""
//             style={{ height: "100%", width: "100%" }}
//           />
//         )}

//         {/* <img
//           src={avatarUrl ? avatarUrl : `avatars/${size}x${size}`}
//           alt={avatarUrl ? "Avatar" : ""}
//           style={{ height: "100%", width: "100%" }}
//         /> */}
//       </div>
//       {uploading ? (
//         <span
//           style={{
//             position: "absolute",
//             display: "flex",
//             alignItems: "center",
//             height: "100%",
//             width: "100%",
//             borderRadius: "50%",
//             justifyContent: "center",
//             color: "#fff",
//           }}
//         >
//           Uploading...
//         </span>
//       ) : (
//         <>
//           <div className="addAvatar">
//             <label htmlFor="avatar" style={{ cursor: "pointer" }}>
//               <MdOutlineAddAPhoto />
//             </label>
//             <input
//               type="file"
//               id="avatar"
//               accept="image/*"
//               style={{ display: "none" }}
//               onChange={uploadAvatar}
//               disabled={uploading}
//             />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
// export default Avatar;
