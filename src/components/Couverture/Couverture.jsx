import React, { useEffect, useState } from "react";

import { supabase } from "../../supabase";
// import { supabase } from "./supabaseClient";
// import VisuallyHidden from "@reach/visually-hidden";
// import { MdOutlineAddAPhoto } from "react-icons/md";
// import "./avatar.css";
// import groupo from "../../assets/groupo.png";
function Couverture({ url, size, onUpload }) {
  const [couvertureUrl, setcouvertureUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("couverture")
        .download(path);
      // console.log(data);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setcouvertureUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  const uploadCouverture = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { data, error: uploadError } = await supabase.storage
        .from("couverture")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
      console.log(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="couverture">
      <img
        src={couvertureUrl ? couvertureUrl : `couverture_url/${size}x${size}`}
        alt={couvertureUrl ? "Couverture" : "no image"}
        style={{ height: "100%", width: "100%" }}
      />
      {uploading ? (
        <span
          style={{
            // position: "absolute",
            // display: "flex",
            // alignItems: "center",
            height: "100%",
            width: "100%",
            // borderRadius: "50%",
            // justifyContent: "center",
            color: "#fff",
          }}
        >
          Uploading...
        </span>
      ) : (
        <>
          <label htmlFor="addCouverture" style={{ cursor: "pointer" }}>
            <span>Changer</span>
            <input
              type="file"
              id="addCouverture"
              style={{ display: "none" }}
              accept="image/*"
              onChange={uploadCouverture}
              disabled={uploading}
            />
          </label>
        </>
      )}
    </div>
  );
}
export default Couverture;

//       style={{
//         position: "absolute",
//         display: "flex",
//         alignItems: "center",
//         height: "100%",
//         width: "100%",
//         // borderRadius: "50%",
//         // justifyContent: "center",
//         color: "#fff",
//       }}
//     >
//       Uploading...
//     </span>
//   ) : (
//     <>
//       <div className="addAvatar">
//         <label htmlFor="couverture" style={{ cursor: "pointer" }}>
//           <MdOutlineAddAPhoto />
//         </label>
//         <input
//           type="file"
//           id="couverture"
//           accept="image/*"
//           style={{ display: "none" }}
//           onChange={uploadCouverture}
//           disabled={uploading}
//         />
//       </div>
//     </>
//   )}
