import { useEffect, useState } from "react";
import {
  getAllAttendance,
  getMonthlySalary,
  getMonthlyReport,
} from "../../services/attendanceService";
import { getTeachers } from "../../services/teacherService";

import jsPDF from "jspdf";

export default function AttendancePage() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");

  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [month, setMonth] = useState("");
  const [salary, setSalary] = useState(null);

  // 🔥 LOAD DATA
  useEffect(() => {
    fetchAttendance();
    fetchTeachers();
  }, []);

  // 🔥 FETCH ATTENDANCE
  const fetchAttendance = async (selectedDate) => {
    try {
      const res = await getAllAttendance(selectedDate || "");
      setData(res.data);
    } catch (err) {
      console.log("Attendance Error:", err.response?.data);
    }
  };

  // 🔥 FETCH TEACHERS
  const fetchTeachers = async () => {
    try {
      const res = await getTeachers();
      setTeachers(res.data);
    } catch (err) {
      console.log("Teacher Error:", err);
    }
  };

  // 🔥 GET SALARY
  const fetchSalary = async () => {
    if (!selectedTeacher || !month) {
      return alert("Select teacher & month");
    }

    try {
      const res = await getMonthlySalary(selectedTeacher, month);
      setSalary(res.data);
    } catch (err) {
      console.log("Salary Error:", err.response?.data);
      alert("Error fetching salary ❌");
    }
  };

  // 🔥 DOWNLOAD PDF
  const downloadPDF = () => {
    if (!salary) return;

    const teacherName = teachers.find((t) => t._id === selectedTeacher)?.userId
      ?.name;

    const doc = new jsPDF();

    doc.text("Salary Report", 20, 20);
    doc.text(`Teacher: ${teacherName}`, 20, 40);
    doc.text(`Month: ${month}`, 20, 50);
    doc.text(`Present Days: ${salary.presentDays}`, 20, 60);
    doc.text(`Salary: ₹${salary.salary}`, 20, 70);

    doc.save("salary-report.pdf");
  };

  const downloadReport = async () => {
    if (!selectedTeacher || !month) {
      return alert("Select teacher & month");
    }

    const res = await getMonthlyReport(selectedTeacher, month);
    const data = res.data;

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Monthly Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Teacher: ${data.name}`, 20, 40);
    doc.text(`Month: ${data.month}`, 20, 50);
    doc.text(`Present Days: ${data.presentDays}`, 20, 60);
    doc.text(`Absent Days: ${data.absentDays}`, 20, 70);
    doc.text(`Salary: ₹${data.salary}`, 20, 80);

    doc.save("report.pdf");
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* TITLE */}
      <h1 className="text-2xl font-bold">Attendance Management</h1>
      {/* DATE FILTER */}
      <div className="flex gap-3 flex-wrap">
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            fetchAttendance(e.target.value);
          }}
          className="border p-2 rounded"
        />

        <button
          onClick={() => {
            setDate("");
            fetchAttendance();
          }}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Reset
        </button>
      </div>
      {/* TABLE */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Teacher Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.teacherId?.userId?.name || "N/A"}</td>
                <td>{item.date}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      item.status === "Present"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* SALARY SECTION */}
      <div className="bg-white shadow rounded p-5 space-y-4">
        <h2 className="text-lg font-semibold">Monthly Salary Report</h2>

        <div className="flex gap-3 flex-wrap">
          {/* TEACHER DROPDOWN */}
          <select
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select Teacher</option>
            {teachers.map((t) => (
              <option key={t._id} value={t._id}>
                {t.userId?.name}
              </option>
            ))}
          </select>

          {/* MONTH */}
          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            onClick={fetchSalary}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Get Salary
          </button>
        </div>

        {/* RESULT */}
        {salary && (
          <div className="bg-gray-50 p-4 rounded space-y-2">
            <p>
              Present Days:{" "}
              <span className="font-semibold">{salary.presentDays}</span>
            </p>

            <p className="text-green-600 font-bold">
              Total Salary: ₹{salary.salary}
            </p>

            <button
              onClick={downloadPDF}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Download PDF
            </button>
            <button
              onClick={downloadReport}
              className="bg-purple-600 text-white px-4 py-2 rounded"
            >
              Download Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
