import axios from "axios";


export const getResult = (roll) =>
  axios.get(`http://localhost:5000/api/results/${roll}`);


export const addResult = (data) =>
  axios.post("http://localhost:5000/api/results", data);