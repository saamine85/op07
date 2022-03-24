import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import "./delete.css";

const Delete = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const handleDelete = async () => {
    await supabase.from("profile").delete({ user_id: session.user.id });
    // console.log(user_id)
    console.log(session.user.id);
  };
  return (
    <>
      {session ? (
        <button className="delete" onClick={handleDelete}>
          supprimer profile
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default Delete;
