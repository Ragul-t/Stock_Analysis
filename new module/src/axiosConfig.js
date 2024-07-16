import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  // Other custom settings if needed
});

export default instance;
