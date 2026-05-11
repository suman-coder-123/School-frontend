import axios from "axios";

const API =
  "https://school-backend-2-ackw.onrender.com/api/student";

// ================= TOKEN =================

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: token,
    },
  };
};

// ================= ADMIN =================

export const getStudents = () =>
  axios.get(API, getAuthConfig());

export const addStudent = (data) =>
  axios.post(API, data, getAuthConfig());

export const updateStudent = (id, data) =>
  axios.put(`${API}/${id}`, data, getAuthConfig());

export const deleteStudent = (id) =>
  axios.delete(`${API}/${id}`, getAuthConfig());

// ================= STUDENT =================

export const getMyProfile = () =>
  axios.get(
    `${API}/my-profile`,
    getAuthConfig()
  );

export const updateMyProfile = (data) =>
  axios.put(
    `${API}/my-profile`,
    data,
    getAuthConfig()
  );