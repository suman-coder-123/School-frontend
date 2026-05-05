import axios from "axios";

export const getFee = (roll) =>
  axios.get(`https://school-backend-2-ackw.onrender.com/api/fees/${roll}`);

export const payFee = (id) =>
  axios.put(`https://school-backend-2-ackw.onrender.com/api/fees/pay/${id}`);

export const getAllFees = () =>
  axios.get("https://school-backend-2-ackw.onrender.com/api/fees");

export const getStudentFees = (roll) =>
  axios.get(`https://school-backend-2-ackw.onrender.com/api/fees/student/${roll}`);