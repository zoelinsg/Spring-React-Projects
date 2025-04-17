import axios from "axios";

const API_BASE = "http://localhost:8080/api/posts";

const getAllPosts = () => axios.get(API_BASE);
const getPost = (id) => axios.get(`${API_BASE}/${id}`);

const createPost = (post) => {
  return axios.post(API_BASE, post);
};

const updatePost = (id, post) => {
  return axios.put(`${API_BASE}/${id}`, post);
};

const deletePost = (id, userId) => {
  return axios.delete(`${API_BASE}/${id}`, {
    params: { userId },
  });
};

const searchPosts = (keyword) => axios.get(`${API_BASE}/search?keyword=${keyword}`);
const getPostsByCategory = (category) => axios.get(`${API_BASE}/category?category=${category}`);

const PostService = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  searchPosts,
  getPostsByCategory,
};

export default PostService;
