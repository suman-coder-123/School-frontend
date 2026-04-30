import axios from "axios";

// 👉 LOCAL BACKEND URL
const API = "http://localhost:5000";

// ✅ SAVE TIMETABLE
export const saveTimetable = (data) => {
  return axios.post(`${API}/api/timetable`, data);
};

// ✅ GET TIMETABLE
export const getTimetable = () => {
  return axios.get(`${API}/api/timetable`);
};