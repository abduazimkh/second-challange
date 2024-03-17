import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
      'Content-Type': 'application/json',
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
  },
  timeout: 10000
})

export default instance;