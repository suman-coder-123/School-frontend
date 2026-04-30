import { useEffect, useState } from "react";
import axios from "axios";

export default function NoticesPage() {
  const [notices, setNotices] = useState([]);

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

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Notices</h1>

      {notices.length > 0 ? (
        notices.map((n) => (
          <div key={n._id} className="bg-white p-4 mb-3 shadow">
            <h2>{n.title}</h2>
            <p>{n.message}</p>
          </div>
        ))
      ) : (
        <p>No notices found</p>
      )}
    </div>
  );
}