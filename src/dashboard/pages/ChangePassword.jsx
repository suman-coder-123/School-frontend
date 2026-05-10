import React, { useState } from "react";
import axios from "axios";

const ChangePassword = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:5000/api/auth/change-password",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert(res.data.message);

    } catch (err) {

      alert(err.response.data.message);
    }
  };

  return (
    <div>

      <h2>Change Password</h2>

      <form onSubmit={handleChangePassword}>

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit">
          Change Password
        </button>

      </form>

    </div>
  );
};

export default ChangePassword;