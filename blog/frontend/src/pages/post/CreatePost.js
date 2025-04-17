import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/PostService";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      authorId: localStorage.getItem("userId"),
      author: localStorage.getItem("username"),
    };

    try {
      await PostService.createPost(payload);
      navigate("/posts");
    } catch {
      setMessage("發佈文章失敗，請再試一次");
    }
  };

  return (
    <div className="col-md-8 offset-md-2 mt-4">
      <h2>新增文章</h2>
      {message && <div className="alert alert-danger">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>標題</label>
          <input type="text" name="title" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>分類</label>
          <select name="category" className="form-control" required onChange={handleChange}>
            <option value="">請選擇</option>
            <option value="文學">文學</option>
            <option value="科技">科技</option>
            <option value="工藝">工藝</option>
            <option value="其他">其他</option>
          </select>
        </div>
        <div className="mb-3">
          <label>內容</label>
          <textarea name="content" rows="5" className="form-control" required onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">發佈</button>
      </form>
    </div>
  );
};

export default CreatePost;
