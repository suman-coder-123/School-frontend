import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(form);

      console.log("LOGIN RESPONSE:", res.data);

      // Save data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("name", res.data.name);

      alert("Login Successful ✅");

      if (res.data.role === "admin") {
        navigate("/dashboard");
      } else if (res.data.role === "teacher") {
        navigate("/teacher");
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="input w-full mb-2"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="input w-full mb-3"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>

      {/* ✅ SIGN UP LINK */}
      <p className="mt-4 text-center">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-600 cursor-pointer font-semibold"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}