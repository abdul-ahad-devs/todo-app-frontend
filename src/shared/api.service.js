import axios from "axios";

export const BASE_URL = "http://localhost:8080";

const apiInstance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000 * 600,
  headers: { "Content-Type": "application/json" },
});

async function get(url, queryParams, config) {
  const response = await apiInstance.get(url, queryParams, config);
  return response;
}

async function post(url, data, config) {
  const response = await apiInstance.post(url, data, config);
  return response;
}

async function patch(url, data, config) {
  const response = await apiInstance.patch(url, data, config);
  return response;
}

async function remove(url, queryParams, config) {
  const response = await apiInstance.delete(url, queryParams, config);
  return response;
}

const apiService = {
  get,
  post,
  patch,
  remove,
};

export default apiService;
