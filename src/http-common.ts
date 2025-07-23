import axios, { type AxiosInstance } from "axios";

let baseURL = import.meta.env.VITE_API_BASE_URL ?? "";

const headers = {
  "Content-type": "application/json",
} as { [key: string]: string };


const BaseApi: AxiosInstance = axios.create({
  baseURL,
  headers,
});

BaseApi.interceptors.response.use(
  function (response) {
    return response.data;
  }
);

export default BaseApi;
