import { apiDomain } from "@config";
import axios from "axios";

const apiClient = axios.create({
  baseURL: apiDomain,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    console.log("err", error);
    throw error;
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("err", error);
    throw error;
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log('apiGetMemberRevenueList 2', error);
    if (error.response?.status === 401) {
      window.localStorage.removeItem("token");
      window.location.href = "#/welcome";
    }
    throw error;
  }
);
const getToken = () => {
  let token = localStorage.getItem("token");
  if (token !== null) {
    token = JSON.stringify(token).replaceAll(/[",\\]/g, "");
  }
  return token;
};

export default apiClient;
