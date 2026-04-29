import { useState } from "react";
import { registerUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
  try {
    const res = await registerUser(form);

    console.log("SUCCESS:", res.data);

    alert("Registered Successfully ✅");

    navigate("/login");

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message); // 👈 IMPORTANT
    alert("Register failed ❌");
  }
};

  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">Register</h1>

      <input name="name" placeholder="Name" onChange={handleChange} className="input" />
      <input name="email" placeholder="Email" onChange={handleChange} className="input" />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} className="input" />

      <select name="role" onChange={handleChange} className="input">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleRegister}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-3"
      >
        Register
      </button>
    </div>
  );
}