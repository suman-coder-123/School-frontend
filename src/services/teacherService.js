import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/teachers";

export const addTeacher = (data) => axios.post(API, data);
export const getTeachers = () => axios.get(API);
export const updateTeacher = (id, data) =>
  axios.put(`https://school-backend-2-ackw.onrender.com/api/teachers/${id}`, data);

export const deleteTeacher = (id) =>
  axios.delete(`/api/teachers/${id}`);