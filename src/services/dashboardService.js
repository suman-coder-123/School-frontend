import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/dashboard";

export const getStats = () => axios.get(`${API}/stats`);

export const getAttendanceChart = () =>
  axios.get("https://school-backend-2-ackw.onrender.com/api/dashboard/attendance-chart");