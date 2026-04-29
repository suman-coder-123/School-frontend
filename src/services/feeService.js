import axios from "axios";

export const getFee = (roll) =>
  axios.get(`http://localhost:5000/api/fees/${roll}`);

export const payFee = (id) =>
  axios.put(`http://localhost:5000/api/fees/pay/${id}`);

export const getAllFees = () =>
  axios.get("http://localhost:5000/api/fees");

export const getStudentFees = (roll) =>
  axios.get(`http://localhost:5000/api/fees/student/${roll}`);