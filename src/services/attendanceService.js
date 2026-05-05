import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/attendance";

export const markAttendance = (data) => {
  console.log("Sending:", data); // 👈 DEBUG
  return axios.post(`${API}/mark`, data);
};

export const getAttendance = (id) =>
  axios.get(`${API}/${id}`);

export const getSalary = (id) =>
  axios.get(`${API}/salary/${id}`);

export const getAllAttendance = (date) =>
  axios.get(`${API}?date=${date || ""}`);

export const getMonthlySalary = (teacherId, month) =>
  axios.get(`${API}/monthly-salary?teacherId=${teacherId}&month=${month}`);

  const fetchSalary = async () => {
  if (!selectedTeacher || !month) {
    return alert("Select teacher & month");
  }

  try {
    const res = await getMonthlySalary(selectedTeacher, month);
    setSalary(res.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
};

export const getMonthlyReport = (teacherId, month) =>
  axios.get(
    `https://school-backend-2-ackw.onrender.com/api/attendance/monthly-report?teacherId=${teacherId}&month=${month}`
  );