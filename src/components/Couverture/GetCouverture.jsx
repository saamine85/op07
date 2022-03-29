<<<<<<< HEAD
// import React, { useState } from "react";
// import Couverture from "./Couverture";
// import { supabase } from "../../supabase";
// // import "../sidebare/Sidebar.css";
// const GetCouverture = () => {
//   const [couverture_url, setcouvertureUrl] = useState(null);
//   const updateProfile = async (e) => {
//     // e.preventDefault();
//     try {
//       const user = supabase.auth.user();
//       const updates = {
//         id: user.id,
//         couverture_url,
//         // username,
//         updated_at: new Date(),
//       };
//       let { error } = await supabase.from("profile").upsert(updates, {
//         returning: "minimal", // Don't return the value after inserting
//       });
//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
//   return (
//     <>
//       <Couverture
//         url={couverture_url}
//         onUpload={(url) => {
//           setcouvertureUrl(url);
//           updateProfile({ couverture_url: url });
//         }}
//       />
//     </>
//   );
// };

// export default GetCouverture;
=======
import React, { useState } from "react";
import Couverture from "./Couverture";
import { supabase } from "../../supabase";
// import "../sidebare/Sidebar.css";
const GetCouverture = () => {
  const [couverture_url, setcouvertureUrl] = useState(null);
  const updateProfile = async (e) => {
    // e.preventDefault();
    try {
      const user = supabase.auth.user();
      const updates = {
        id: user.id,
        couverture_url,
        // username,
        updated_at: new Date(),
      };
      let { error } = await supabase.from("profile").upsert(updates, {
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
      <Couverture
        url={couverture_url}
        onUpload={(url) => {
          setcouvertureUrl(url);
          updateProfile({ couverture_url: url });
        }}
      />
    </>
  );
};

export default GetCouverture;
>>>>>>> f7af2e0331f2d2ff5e024012b98545c49886eaa6
