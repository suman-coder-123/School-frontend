import axios from "axios";

const API =
  "https://school-backend-2-ackw.onrender.com/api/students";

// ✅ TOKEN
const getToken = () => {
  return localStorage.getItem("token");
};

// ✅ GET
export const getStudents = () => {
  return axios.get(API);
};

// ✅ ADD
export const addStudent = (data) => {
  return axios.post(API, data, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

// ✅ DELETE
export const deleteStudent = (id) => {
  return axios.delete(`${API}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};