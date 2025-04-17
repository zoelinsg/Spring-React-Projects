import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../../services/PostService";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "", category: "" });

  useEffect(() => {
    PostService.getPost(id).then((res) => setPost(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...post,
      authorId: localStorage.getItem("userId"),
      author: localStorage.getItem("username"),
    };

    await PostService.updatePost(id, payload);
    navigate("/posts");
  };

  return (
    <div className="container mt-4">
      <h2>編輯文章</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>標題</label>
          <input name="title" value={post.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>分類</label>
          <select name="category" value={post.category} onChange={handleChange} className="form-control" required>
            <option value="">請選擇分類</option>
            <option value="文學">文學</option>
            <option value="科技">科技</option>
            <option value="工藝">工藝</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div className="mb-3">
          <label>內容</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            className="form-control"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">更新</button>
      </form>
    </div>
  );
};

export default EditPost;
