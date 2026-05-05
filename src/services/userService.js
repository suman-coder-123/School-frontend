import axios from "axios";

const API = "https://school-backend-2-ackw.onrender.com/api/users";

export const updateUser = (id, data) =>
  axios.put(`${API}/${id}`, data);``