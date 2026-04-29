import axios from "axios";

const API = "http://localhost:5000/api/users";

export const updateUser = (id, data) =>
  axios.put(`${API}/${id}`, data);``