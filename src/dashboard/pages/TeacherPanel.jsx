import { useEffect, useState } from "react";
import axios from "axios";
import {
  markAttendance,
  getSalary,
} from "../../services/attendanceService";

export default function TeacherPanel() {
  const [teacherId, setTeacherId] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(null);

  useEffect(() => {
    fetchTeacher();
  }, []);

  const fetchTeacher = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `https://school-backend-2-ackw.onrender.com/api/teachers/user/${userId}`
      );

      setTeacherId(res.data._id); // ✅ REAL teacherId
      setName(res.data.userId.name); // ✅ Name
    } catch (err) {
      console.log(err.response?.data);
      alert("Teacher not found ❌");
    }
  };

  const handleMark = async (status) => {
    if (!teacherId) return alert("Teacher not loaded");

    try {
      await markAttendance({
        teacherId, // ✅ correct ID
        status,
      });

      alert(`Marked ${status} ✅`);
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Error ❌");
    }
  };

  const fetchSalary = async () => {
    const res = await getSalary(teacherId);
    setSalary(res.data);
  };

 const fetchNotices = async () => {
  const res = await axios.get(
    "https://school-backend-2-ackw.onrender.com/api/notices?target=teacher"
  );
  setNotices(res.data);
}; 

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">
        Welcome, {name}
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => handleMark("Present")}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Present
        </button>

        <button
          onClick={() => handleMark("Absent")}
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Absent
        </button>
      </div>

      <button
        onClick={fetchSalary}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Check Salary
      </button>

      {salary && (
        <div className="bg-white p-4 shadow rounded">
          <p>Present Days: {salary.presentDays}</p>
          <p>Total Salary: ₹{salary.salary}</p>
        </div>
      )}
    </div>
  );
}