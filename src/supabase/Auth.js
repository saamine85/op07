
// import { useState } from 'react'
// import { supabase } from '../../utils/supabase'
// import Layout from "../../components/Layout";
// export default function Auth() {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [email, setEmail] = useState('')
//  const [password, setPassword] = useState('')
                               
                          
//   const handleRegister = async (data) => {
//     setError("");
//     const { user, session, error } = await supabase.auth.signUp({
//       email: data.email,
//       password: data.password,
//     });
//     if (error) {
//       setError(error.message);
//       return;
//     }
//     console.log({ user, session, error });
//   };

//    return(
//      <>
//      <div className="row flex flex-center">
//  <div className="col-6 form-widget">
//    <n1 className="description">Register below</h1>
//    <div className="form-control">
//      <label className="label">
//        <span className="label-text">E-mail</span>
//      </ Label>
//      <input
//        type="email"
//        placeholder="email"
//        className="input input-bordered"
//        value={email}
//        onChange={(e) => setEmail(e.target.value)}
//        />
//    </div>
//        </>
//    );
//   }