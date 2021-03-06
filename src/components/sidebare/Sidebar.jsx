import React from "react";
// import GetAvatar from "../Avatar/GetAvatar";
import Delete from "../delete/Delete";
import { supabase } from "../../supabase";

import "./Sidebar.css";
import { useEffect, useState } from "react";
// import AvatarUrl from "../Avatar/AvatarUrl";
// import GetAvatar from "../Avatar/GetAvatar";
import Avatar from "../Avatar/Avatar";
const Sidebar = () => {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState("");
  // const [avatarPublicUrl, setAvatarUrl] = useState();

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      fetchProfile();
    }
  }, [session]);

  const fetchProfile = async () => {
    let { data: profile } = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", session.user.id)
      .single();
    console.log(profile);
    setProfile(profile);
  };

  return (
    // <>
    <div className="side-bar">
      {profile ? (
        <>
          <Avatar
            // avatarPublicUrl={avatarPublicUrl}
            // setAvatarUrl={setAvatarUrl}
          />
          <div className="info">
            <p>{profile.username}</p>
            <p> {profile.email}</p>
            <p>{profile.departement}</p>
            <Delete className="delete" />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
    // {/* </> */}
  );
};

export default Sidebar;

// REACT_APP_SUPABASE_URL = "https://ztjrqxiwhlppuoymqmni.supabase.co";
// REACT_APP_SUPABASE_PUBLIC_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anJxeGl3aGxwcHVveW1xbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyNTUxMTcsImV4cCI6MTk2MjgzMTExN30.nfuhWTFa-QFQVLRUM7OKQ953MgUH2yKvBvDeqy1j6yg";
