import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentDashboard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const res = await axios.get(
      "https://school-backend-2-ackw.onrender.com/api/notices?target=student"
    );
    setNotices(res.data);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📢 Notices</h2>

      {notices.map((n) => (
        <div key={n._id} className="bg-white p-3 shadow mb-2 rounded">
          <h3 className="font-semibold">{n.title}</h3>
          <p className="text-gray-600">{n.message}</p>
        </div>
      ))}
    </div>
  );
}