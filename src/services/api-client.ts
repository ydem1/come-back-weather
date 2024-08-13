import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
  },
});
