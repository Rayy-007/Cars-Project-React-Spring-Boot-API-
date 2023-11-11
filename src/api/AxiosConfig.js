import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    whoCreated: "This API is Created By Khant",
  },
});

export default api;
