import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  ClipboardCheck,
  Bell,
  Menu,
  X,
  ClipboardList, CreditCard, CalendarDays,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const linkStyle =
    "flex items-center gap-3 px-4 py-2 rounded-lg transition";

  return (
    <>
      {/* 🔥 MOBILE HEADER */}
      <div className="md:hidden flex justify-between items-start p-4 bg-[#0F172A] text-white">
        <h1 className="font-bold">SchoolMS</h1>
        <button onClick={() => setOpen(!open)}>
          {open ? < X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔥 SIDEBAR */}
      <div
        className={`
          fixed md:static top-0 left-0 z-50  w-64
          bg-[#0F172A] text-white p-5
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* LOGO */}
        <h1 className="text-xl font-bold mb-6 text-blue-400">
          🎓 SchoolMS
        </h1>

        {/* NAV */}
        <nav className="space-y-2">

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-[#1E293B]"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/students"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600"
                  : "text-gray-300 hover:bg-[#1E293B]"
              }`
            }
          >
            <Users size={18} />
            Students
          </NavLink>

          <NavLink
            to="/dashboard/teachers"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600"
                  : "text-gray-300 hover:bg-[#1E293B]"
              }`
            }
          >
            <UserCheck size={18} />
            Teachers
          </NavLink>

          <NavLink
            to="/dashboard/attendance"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600"
                  : "text-gray-300 hover:bg-[#1E293B]"
              }`
            }
          >
            <ClipboardCheck size={18} />
            Attendance
          </NavLink>

          <NavLink
            to="/dashboard/notices"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600"
                  : "text-gray-300 hover:bg-[#1E293B]"
              }`
            }
          >
            <Bell size={18} />
            Notices
          </NavLink>

<NavLink
  to="/dashboard/add-result"
  className={({ isActive }) =>
    `${linkStyle} ${
      isActive
        ? "bg-blue-600"
        : "text-gray-300 hover:bg-[#1E293B]"
    }`
  }
>
  <ClipboardList size={18} />
  Add Result
</NavLink>
<NavLink
  to="/dashboard/fees"
  className={({ isActive }) =>
    `${linkStyle} ${
      isActive
        ? "bg-blue-600"
        : "text-gray-300 hover:bg-[#1E293B]"
    }`
  }
>
  <CreditCard size={18} />
  Fees
</NavLink>
<NavLink
  to="/dashboard/timetable"
  className={({ isActive }) =>
    `${linkStyle} ${
      isActive
        ? "bg-blue-600"
        : "text-gray-300 hover:bg-[#1E293B]"
    }`
  }
>
  <CalendarDays size={18} />
  Timetable
</NavLink>
        </nav>

        {/* USER */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-sm">
          <p className="text-gray-300">
            {localStorage.getItem("name") || "Admin"}
          </p>
          <p className="text-gray-500 text-xs">
            {localStorage.getItem("role")}
          </p>
        </div>
      </div>
    </>
  );
}