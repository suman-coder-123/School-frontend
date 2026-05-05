import { useState, useEffect } from "react";
import axios from "axios";

export default function Notices() {
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    message: "",
    target: "student",
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const role = localStorage.getItem("role") || "student";

    const res = await axios.get(
      `https://school-backend-2-ackw.onrender.com/api/notices?target=${role}`
    );

    setNotices(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addNotice = async () => {
    if (!form.title || !form.message) return;

    await axios.post(
      "https://school-backend-2-ackw.onrender.com/api/notices",
      form
    );

    fetchNotices();

    setForm({ title: "", message: "", target: "student" });
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Notice Board</h1>

      {/* FORM */}
      <div className="bg-white p-4 shadow mb-6">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full mb-2"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-2 w-full mb-2"
        />

        <select
          name="target"
          value={form.target}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="student">Students</option>
          <option value="teacher">Teachers</option>
          <option value="all">All</option>
        </select>

        <button
          onClick={addNotice}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Publish
        </button>
      </div>

      {/* LIST */}
      {notices.length > 0 ? (
        notices.map((n) => (
          <div key={n._id} className="bg-white p-4 mb-3 shadow">
            <h2 className="font-bold">{n.title}</h2>
            <p>{n.message}</p>
            <p className="text-sm text-gray-400">
              {new Date(n.createdAt).toLocaleString()} • {n.target}
            </p>
          </div>
        ))
      ) : (
        <p>No notices</p>
      )}
    </div>
  );
}