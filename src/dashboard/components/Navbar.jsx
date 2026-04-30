import { Link } from "react-router-dom";
import { Bell } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const [notices, setNotices] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  // 🚀 FETCH NOTICES
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await axios.get(
        "https://school-backend-2-ackw.onrender.com/api/notices?target=student"
      );

      setNotices(res.data);
      setUnreadCount(res.data.length);
    } catch (err) {
      console.log("Error fetching notices:", err);
    }
  };

  // 🔔 TOGGLE DROPDOWN
  const handleOpen = () => {
    setShowDropdown((prev) => !prev);
    setUnreadCount(0);
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow my-5">

      {/* 🎓 LOGO */}
      <h1 className="text-xl font-bold text-blue-600">
        🎓 Sharda Vidhya Niketan School
      </h1>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 relative">

        {/* 🔔 NOTIFICATION */}
        <div className="relative cursor-pointer" onClick={handleOpen}>
          <Bell size={22} />

          {/* 🔴 UNREAD BADGE */}
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}

          {/* 📢 DROPDOWN */}
          {showDropdown && (
            <div className="absolute right-0 mt-3 w-80 bg-white shadow-lg rounded-lg p-3 z-50">

              <h3 className="font-semibold mb-2 border-b pb-1">
                📢 Notices
              </h3>

              {notices.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No notices available
                </p>
              ) : (
                <div className="max-h-60 overflow-y-auto space-y-2">
                  {notices.map((n) => (
                    <div
                      key={n._id}
                      className="border-b pb-2 hover:bg-gray-50 rounded px-1"
                    >
                      <p className="font-medium text-sm">
                        {n.title}
                      </p>

                      <p className="text-gray-600 text-sm">
                        {n.message}
                      </p>

                      <p className="text-xs text-gray-400">
                        {new Date(n.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* 👉 VIEW ALL BUTTON */}
              <Link
                to="/notices"
                className="block text-center text-blue-600 text-sm mt-2 hover:underline"
              >
                View All →
              </Link>

            </div>
          )}
        </div>

        {/* 🔗 LINKS */}
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>

        <Link to="/login">
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
            Dashboard
          </button>
        </Link>

      </div>
    </div>
  );
}