import axios from "axios";

const API = "https://smart-school-system-backend.vercel.app/api/teachers";

export const addTeacher = (data) => axios.post(API, data);
export const getTeachers = () => axios.get(API);
export const updateTeacher = (id, data) =>
  axios.put(`https://smart-school-system-backend.vercel.app/api/teachers/${id}`, data);

export const deleteTeacher = (id) =>
  axios.delete(`/api/teachers/${id}`);