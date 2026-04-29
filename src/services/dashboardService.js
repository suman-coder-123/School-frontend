import axios from "axios";

const API = "http://localhost:5000/api/dashboard";

export const getStats = () => axios.get(`${API}/stats`);

export const getAttendanceChart = () =>
  axios.get("http://localhost:5000/api/dashboard/attendance-chart");