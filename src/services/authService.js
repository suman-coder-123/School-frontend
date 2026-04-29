import axios from "axios";

const API = "http://localhost:5000/api/auth";

// ✅ FIXED
export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

export const registerUser = (data) => {
  return axios.post(`${API}/register`, data);
};