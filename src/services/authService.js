import axios from "axios";

const API = "https://smart-school-system-backend.vercel.app/api/auth";

// ✅ FIXED
export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${API}/register`, data);
};