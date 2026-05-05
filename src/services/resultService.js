import axios from "axios";


export const getResult = (roll) =>
  axios.get(`https://smart-school-system-backend.vercel.app/api/results/${roll}`);


export const addResult = (data) =>
  axios.post("https://smart-school-system-backend.vercel.app/api/results", data);