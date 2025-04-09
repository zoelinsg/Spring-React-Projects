import axios from "axios";

const BASE_URL = "http://localhost:8080/api/users";

export const registerUser = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData);
};

export const loginUser = (loginData) => {
  return axios.post(`${BASE_URL}/login`, loginData);
};

export const getAllUsers = () => {
  return axios.get(BASE_URL);
};

export const updateUser = (id, updatedData) => {
  return axios.put(`${BASE_URL}/${id}`, updatedData);
};

export const deleteUser = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
