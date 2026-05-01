import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api";

// SAVE
export const saveTimetable = (data) => {
  return axios.post(`${API}/timetable`, data);
};

// GET ALL
export const getTimetable = () => {
  return axios.get(`${API}/timetable`);
};

// ✅ ADD THIS (IMPORTANT)
export const getTimetableByClass = (className) => {
  return axios.get(`${API}/timetable/${className}`);
};