import axios from "axios";

// 👉 LOCAL BACKEND URL
const API = "https://school-backend-2-ackw.onrender.com";

// ✅ SAVE TIMETABLE
export const saveTimetable = (data) => {
  return axios.post(`${API}/api/timetable`, data);
};

// ✅ GET TIMETABLE
export const getTimetable = () => {
  return axios.get(`${API}/api/timetable`);
};