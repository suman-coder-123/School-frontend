import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getMyProfile,
  updateMyProfile,
} from "../../services/studentService";
import toast from "react-hot-toast";

export default function MyProfile() {

  const [formData, setFormData] = useState({
    name: "",
    className: "",
    rollNo: "",
    fatherName: "",
    motherName: "",
    phone: "",
    address: "",
  });

  // ================= FETCH PROFILE =================

  const fetchProfile = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await getMyProfile(
        "http://localhost:5000/api/student/my-profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setFormData(res.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= UPDATE PROFILE =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const res = await updateMyProfile(formData);

      toast.success(res.data.message);

    } catch (err) {

      toast.error(err.response.data.message);
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        My Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* CLASS */}
        <input
          type="text"
          name="className"
          placeholder="Class"
          value={formData.className || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* ROLL */}
        <input
          type="text"
          name="rollNo"
          placeholder="Roll Number"
          value={formData.rollNo || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* FATHER */}
        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          value={formData.fatherName || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* MOTHER */}
        <input
          type="text"
          name="motherName"
          placeholder="Mother Name"
          value={formData.motherName || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* PHONE */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone || ""}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        {/* ADDRESS */}
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address || ""}
          onChange={handleChange}
          className="border p-3 rounded md:col-span-2"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded md:col-span-2"
        >
          Update Profile
        </button>

      </form>

    </div>
  );
}