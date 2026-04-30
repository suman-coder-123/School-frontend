import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/auth";

// ✅ FIXED
export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${API}/register`, data);
};