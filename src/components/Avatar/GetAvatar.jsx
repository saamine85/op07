import React, { useState } from "react";
import Avatar from "./Avatar";
import { supabase } from "../../supabase";
// import "../sidebare/Sidebar.css";
const GetAvatar = () => {
  const [avatar_url, setAvatarUrl] = useState(null);
  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        avatar_url,
        // username,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Avatar
        url={avatar_url}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ avatar_url: url });
        }}
      />
    </>
  );
};

export default GetAvatar;
