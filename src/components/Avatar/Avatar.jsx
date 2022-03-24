import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
// import { supabase } from "./supabaseClient";
// import VisuallyHidden from "@reach/visually-hidden";
import { MdOutlineAddAPhoto } from "react-icons/md";
import "./avatar.css";

function Avatar({ url, size, onUpload }) {
  const [avatarUrl, setavatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);
      console.log(data);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setavatarUrl(url);
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  };

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { data , error: uploadError } = await supabase.storage
        .from("avatars")
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
    <div className="imgProfile" style={{ width: size }} aria-live="polite">
      <div className="addImage">
        <img
          src={avatarUrl ? avatarUrl : `avatar_url/${size}x${size}`}
          alt={avatarUrl ? "Avatar" : ""}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {uploading ? (
        <span
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            height: "100%",
            width: "100%",
            borderRadius: "50%",
            justifyContent: "center",
            color: "#fff",
          }}
          
        >
          Uploading...
        </span>
      ) : (
        <>
          
          <div className="addAvatar">
            <label htmlFor="avatar" style={{ cursor: "pointer" }}>
              <MdOutlineAddAPhoto />
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              style={{ display: "none" }}
              onChange={uploadAvatar}
              disabled={uploading}
            />
          </div>
        </>
      )}
    </div>
  );
}
export default Avatar;
