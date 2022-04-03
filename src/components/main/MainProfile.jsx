import React, { useEffect, useState } from "react";
// import groupo from "../../assets/groupo.png";
import { supabase } from "../../supabase";
// import GetCouverture from "../../components/Couverture/GetCouverture";
// import Couverture from "../Couverture/Couverture";
import "./mainprofile.css";
const MainProfile = () => {
  // const userName = "John Doe";

  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [couverturePublicUrl, setCouvertureUrl] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const user = supabase.auth.user();
      if (user) {
        const { data } = await supabase.from("profile").select("*").single();
        user.details = data;
        setCouvertureUrl(data.couverture);
      }
      console.log(`user`, user);
      setCurrentUser(user);
      setLoading();
    };
    fetchUser();
  }, []);

  const handleFil = async (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    const myImage = e.target.files[0];
    const { data } = await supabase.storage
      .from("couverture")
      .upload(`${currentUser.id}/${myImage.name}`, myImage, {
        cacheControl: "3600",
        //replace file
        upsert: true,
      });
    console.log(data);
    const { publicURL } = supabase.storage
      .from("couverture")
      .getPublicUrl(`${currentUser.id}/${myImage.name}`);
    setCouvertureUrl(publicURL);
    console.log(`publicURL`, publicURL);
    await supabase
      .from("profile")
      // .update({ avatar_url: avatarKey })
      .update({ couverture: publicURL })
      .match({ id: currentUser.details.id });
  };

  return (
    <>
      <div className="content">
        {/* <button>Changer</button> */}
        {loading ? (
          "Loading"
        ) : (
          <div className="couverture">
            {couverturePublicUrl && <img src={couverturePublicUrl} alt="" />}
            <label htmlFor="addCouverture" style={{ cursor: "pointer" }}>
              <span onChange={handleFil}>Changer</span>
              <input
                type="file"
                id="addCouverture"
                style={{ display: "none" }}
                onChange={handleFil}
              />
            </label>
          </div>
        )}
        {/* <GetCouverture /> */}
      </div>
    </>
  );
};

export default MainProfile;
