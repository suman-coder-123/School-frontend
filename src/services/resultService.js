import axios from "axios";


export const getResult = (roll) =>
  axios.get(`https://school-backend-2-ackw.onrender.com/api/results/${roll}`);


export const addResult = (data) =>
  axios.post("https://school-backend-2-ackw.onrender.com/api/results", data);