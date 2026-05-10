import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {

      const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.put(
        "https://school-backend-2-ackw.onrender.com/api/auth/forgot-password",
        {
          email,
          newPassword,
        }
      );

      alert(res.data.message);
       navigate("/login");

    } catch (err) {

      alert(err.response.data.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">

      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

      <form onSubmit={handleReset}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           className="input w-full mb-2"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} className="input w-full mb-2"
        />

        <button type="submit"  className="bg-blue-600 text-white px-4 py-1 rounded  ">
          Reset Password
        </button>

      </form>

    </div>
  );
};

export default ForgotPassword;