import axios from "axios";

const API = "https://smart-school-system-backend.vercel.app/api/dashboard";

export const getStats = () => axios.get(`${API}/stats`);

export const getAttendanceChart = () =>
  axios.get("https://smart-school-system-backend.vercel.app/api/dashboard/attendance-chart");