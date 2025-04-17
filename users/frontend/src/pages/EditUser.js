import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/users");
        const found = res.data.find((u) => u.id === parseInt(id));
        if (found) setForm(found);
      } catch (err) {
        console.error("取得使用者資料失敗", err);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/users/${id}`, form);
      setMessage("資料更新成功！");
      navigate("/profile");
    } catch (err) {
      setMessage("更新失敗，請稍後再試");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="mb-4">編輯個人資料</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>使用者名稱</label>
          <input type="text" name="username" className="form-control" required value={form.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>全名</label>
          <input type="text" name="fullName" className="form-control" required value={form.fullName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>電子郵件</label>
          <input type="email" name="email" className="form-control" required value={form.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>密碼</label>
          <input type="password" name="password" className="form-control" required value={form.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">更新</button>
      </form>
    </div>
  );
};

export default EditUser;
