import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getAllPhotos = () => axios.get(`${API_BASE}/photos`);
export const getPhoto = (id) => axios.get(`${API_BASE}/photos/${id}`);
export const createPhoto = (photo) => axios.post(`${API_BASE}/photos`, photo);
export const updatePhoto = (id, photo) => axios.put(`${API_BASE}/photos/${id}`, photo);
export const deletePhoto = (id) => axios.delete(`${API_BASE}/photos/${id}`);

export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_BASE}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
