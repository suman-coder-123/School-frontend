import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/student";

const getConfig = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      // ✅ FIXED: Added "Bearer " prefix
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getStudents = () =>
  axios.get(API, getConfig());

export const addStudent = (data) =>
  axios.post(API, data, getConfig());

export const updateStudent = (id, data) =>
  axios.put(`${API}/${id}`, data, getConfig());

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`, getConfig());