
import React from "react";
import GetAvatar from "../Avatar/GetAvatar";
import Delete from "../delete/Delete";
import "./Sidebar.css";
const Sidebar = () => {

  return (
    <>
      <div className="side-bar">
        {/* <div className="imgProfile"> */}
       <GetAvatar/>
        <div className="info">
          <p>userName</p>
          <p> departement </p>
          <p>email</p>
          <Delete className="delete" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;



// REACT_APP_SUPABASE_URL = "https://ztjrqxiwhlppuoymqmni.supabase.co";
// REACT_APP_SUPABASE_PUBLIC_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0anJxeGl3aGxwcHVveW1xbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcyNTUxMTcsImV4cCI6MTk2MjgzMTExN30.nfuhWTFa-QFQVLRUM7OKQ953MgUH2yKvBvDeqy1j6yg";