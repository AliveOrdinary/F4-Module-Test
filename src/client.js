import axios from "axios";

export const client = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/current.json?key=25a80ad6ece144dd9a294532230403",
});
