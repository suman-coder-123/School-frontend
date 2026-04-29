import axios from "axios";

const API = "http://localhost:5000/api/teachers";

export const addTeacher = (data) => axios.post(API, data);
export const getTeachers = () => axios.get(API);
export const updateTeacher = (id, data) =>
  axios.put(`http://localhost:5000/api/teachers/${id}`, data);

export const deleteTeacher = (id) =>
  axios.delete(`/api/teachers/${id}`);