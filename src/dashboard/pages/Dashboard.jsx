import { useEffect, useState } from "react";
import { getStats } from "../../services/dashboardService";
import axios from "axios";

export default function Dashboard() {

  const [notices, setNotices] =
  useState([]);
  const role =
    localStorage.getItem("role");

  const name =
    localStorage.getItem("name");

  const [stats, setStats] =
    useState({
      students: 0,
      teachers: 0,
      attendancePercent: 0,
    });

  useEffect(() => {

    fetchStats();

  }, []);
const fetchStats = async () => {

  try {

    // STATS
    const res =
      await getStats();

    setStats(res.data);

    // NOTICES
    const role =
      localStorage.getItem("role");

    const noticeRes =
      await axios.get(
        `https://school-backend-2-ackw.onrender.com/api/notices?target=${role}`
      );

    setNotices(
      noticeRes.data
    );

  } catch (err) {

    console.log(err);

  }
};
  return (

    <div className="min-h-screen bg-[#F8FAFC] p-5 md:p-8">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#07152F] to-[#0F3D91] rounded-[32px] p-8 md:p-10 text-white relative overflow-hidden mb-8">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">

          <p className="uppercase tracking-widest text-sm text-cyan-200 mb-3">

            School Portal

          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">

            Welcome Back,
            <br />
            {name || "User"} 👋

          </h1>

          <p className="text-gray-200 max-w-2xl leading-relaxed">

            Manage school activities, stay updated
            with notices, schedules, and access
            your important information from one place.

          </p>

        </div>

      </div>

      {/* COMMON CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <Card
          title="Students"
          value={stats.students}
          icon="🎓"
        />

        <Card
          title="Teachers"
          value={stats.teachers}
          icon="👨‍🏫"
        />

        <Card
          title="Attendance"
          value={`${stats.attendancePercent}%`}
          icon="📊"
        />

        <Card
          title="Role"
          value={role}
          icon="🛡️"
        />

      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100 mb-8">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-2xl font-bold text-[#07152F]">

              Quick Actions

            </h2>

            <p className="text-gray-500 mt-1">

              Frequently used shortcuts

            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

          {/* ADMIN */}
          {role === "admin" && (
            <>
              <ActionCard
                title="Add Student"
                icon="➕"
              />

              <ActionCard
                title="Add Teacher"
                icon="👨‍🏫"
              />

              <ActionCard
                title="Manage Fees"
                icon="💳"
              />

              <ActionCard
                title="Upload Notice"
                icon="📢"
              />
            </>
          )}

          {/* TEACHER */}
          {role === "teacher" && (
            <>
              <ActionCard
                title="Take Attendance"
                icon="✅"
              />

              <ActionCard
                title="Upload Result"
                icon="📄"
              />

              <ActionCard
                title="Class Timetable"
                icon="📅"
              />

              <ActionCard
                title="Student List"
                icon="🎓"
              />
            </>
          )}

          {/* STUDENT */}
          {role === "student" && (
            <>
              <ActionCard
                title="My Profile"
                icon="👤"
              />

              <ActionCard
                title="My Results"
                icon="📊"
              />

              <ActionCard
                title="My Timetable"
                icon="📅"
              />

              <ActionCard
                title="School Notices"
                icon="📢"
              />
            </>
          )}

        </div>

      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* NOTICE BOARD */}
        <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-[#07152F]">

                Latest Notices

              </h2>

              <p className="text-gray-500 mt-1">

                School announcements & updates

              </p>

            </div>

          </div>

         {notices.length > 0 ? (

  notices.map((notice, i) => (

    <div
      key={i}
      className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100"
    >

      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">

        📢

      </div>

      <div>

        <p className="font-medium text-[#07152F]">

          {notice.title}

        </p>

        <p className="text-sm text-gray-500 mt-1">

          {notice.message}

        </p>

        <p className="text-xs text-gray-400 mt-2">

          {new Date(
            notice.createdAt
          ).toLocaleDateString()}

        </p>

      </div>

    </div>
  ))

) : (

  <p className="text-gray-500">

    No notices available

  </p>

)}

        </div>

        {/* EVENTS */}
        <div className="bg-white rounded-[30px] p-6 shadow-sm border border-gray-100">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-[#07152F]">

                Upcoming Events

              </h2>

              <p className="text-gray-500 mt-1">

                School activities & events

              </p>

            </div>

          </div>

          <div className="space-y-5">

            {[
              {
                title: "Annual Function",
                date: "25 Feb 2026",
              },
              {
                title: "Sports Day",
                date: "2 March 2026",
              },
              {
                title: "PTM Meeting",
                date: "10 March 2026",
              },
              {
                title: "Science Fair",
                date: "18 March 2026",
              },
            ].map((event, i) => (

              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#F8FAFC] border border-gray-100"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-[#07152F] text-white flex items-center justify-center text-xl">

                    📅

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#07152F]">

                      {event.title}

                    </h3>

                    <p className="text-sm text-gray-500">

                      Upcoming Event

                    </p>

                  </div>

                </div>

                <p className="text-sm font-medium text-gray-600">

                  {event.date}

                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

// CARD
function Card({
  title,
  value,
  icon,
}) {

  return (

    <div className="bg-white rounded-[28px] p-5 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm mb-2">

            {title}

          </p>

          <h2 className="text-3xl font-bold text-[#07152F] capitalize">

            {value}

          </h2>

        </div>

        <div className="text-4xl">

          {icon}

        </div>

      </div>

    </div>
  );
}

// ACTION CARD
function ActionCard({
  title,
  icon,
}) {

  return (

    <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">

      <div className="text-3xl mb-4">

        {icon}

      </div>

      <h3 className="font-semibold text-[#07152F]">

        {title}

      </h3>

    </div>
  );
}