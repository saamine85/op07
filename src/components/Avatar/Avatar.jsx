import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
// import { supabase } from "./supabaseClient";
// import VisuallyHidden from "@reach/visually-hidden";
import { MdOutlineAddAPhoto } from "react-icons/md";
import "./avatar.css";

function Avatar() {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [avatarPublicUrl, setAvatarUrl] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const user = supabase.auth.user();
      if (user) {
        const { data } = await supabase.from("profile").select("*").single();
        user.details = data;
        setAvatarUrl(data.avatar_url);
      }
      console.log(`user`, user);
      setCurrentUser(user);
    };
    fetchUser();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const formData = new FormData(e.target);
  //   await supabase
  //     .from("profile")
  //     // .update({ full_name: formData.get("fullName") })
  //     .match({ id: currentUser.details.id });
  // };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading();
    const formData = new FormData(e.target);
    const avatarFile = formData.get("avatar");
    const {
      data: { Key: avatarKey },
    } = await supabase.storage
      .from("avatars")
      .upload(`${currentUser.id}/${avatarFile.name}`, formData.get("avatar"), {
        cacheControl: "3600",
        //replace file
        upsert: true,
      });
    console.log(avatarKey);
    const { publicURL } = supabase.storage
      .from("avatars")
      .getPublicUrl(`${currentUser.id}/${avatarFile.name}`);
    setAvatarUrl(publicURL);
    console.log(`publicURL`, publicURL);
    await supabase
      .from("profile")
      // .update({ avatar_url: avatarKey })
      .update({ avatar_url: publicURL })
      .match({ id: currentUser.details.id });
  };
  // const updateProfile = async (e) => {
  //   try {
  //     const user = supabase.auth.user();
  //     const updates = {
  //       id: user.id,
  //       avatar_url: user.avatar_url,
  //       updated_at: new Date(),
  //     };
  //     console.log(updates);
  //     let { error } = await supabase.from("profile").upsert(updates, {
  //       returning: "minimal", // Don't return the value after inserting
  //     });

  //     if (error) {
  //       throw error;
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  return (
    <form onSubmit={handleUpload} className="formImage">
      <div className="avatar">
        <div className="addavatar">
          {avatarPublicUrl && <img src={avatarPublicUrl} alt="" />}
        </div>
        {loading ? (
          "Loading"
        ) : (
          <div className="photoIcon">
            <label htmlFor="single" style={{ cursor: "pointer" }}>
              <MdOutlineAddAPhoto />
              <input
                type="file"
                id="single"
                name="avatar"
                disabled={loading}
                style={{ display: "none" }}
                // onSubmit={handleUpload}
              />
            </label>
          </div>
        )}
      </div>
      <input
        type="submit"
        className="uploadAvatar"
        value="telecharger avatar"
        // onChange={updateProfile}
      />
    </form>
  );
}
export default Avatar;
