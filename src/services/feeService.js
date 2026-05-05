import axios from "axios";

export const getFee = (roll) =>
  axios.get(`https://smart-school-system-backend.vercel.app/api/fees/${roll}`);

export const payFee = (id) =>
  axios.put(`https://smart-school-system-backend.vercel.app/api/fees/pay/${id}`);

export const getAllFees = () =>
  axios.get("https://smart-school-system-backend.vercel.app/api/fees");

export const getStudentFees = (roll) =>
  axios.get(`https://smart-school-system-backend.vercel.app/api/fees/student/${roll}`);