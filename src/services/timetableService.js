import axios from "axios";

const API = "http://localhost:5000/api/timetable";

export const saveTimetable = (data) =>
  axios.post(API, data);

export const getTimetable = (className) =>
  axios.get(`${API}/${encodeURIComponent(className)}`);