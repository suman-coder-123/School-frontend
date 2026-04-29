import { useEffect, useState } from "react";
import { getStats } from "../../services/dashboardService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

import { getAttendanceChart } from "../../services/dashboardService";
export default function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    attendancePercent: 0,
  });
const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

 const fetchStats = async () => {
  try {
    const res = await getStats();
    setStats(res.data);

    const chart = await getAttendanceChart();
    setAttendanceData(chart.data);

  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  // 📊 BAR DATA
  const chartData = [
    { name: "Students", value: stats.students },
    { name: "Teachers", value: stats.teachers },
  ];

 
  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        Dashboard Overview
      </h1>

      {/* 🔥 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Card title="Students" value={stats.students} />
        <Card title="Teachers" value={stats.teachers} />
        <Card
          title="Attendance Today"
          value={`${stats.attendancePercent}%`}
        />

      </div>

      {/* 📊 CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* BAR CHART */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="mb-4 font-semibold text-gray-700">
            Students vs Teachers
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* LINE CHART */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="mb-4 font-semibold text-gray-700">
            Weekly Attendance
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}

// 🔥 CARD COMPONENT
function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md text-center hover:shadow-lg transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
    </div>
  );
}