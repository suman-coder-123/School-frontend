import axios from "axios";

const API = "https://smart-school-system-backend.vercel.app/api/users";

export const updateUser = (id, data) =>
  axios.put(`${API}/${id}`, data);``