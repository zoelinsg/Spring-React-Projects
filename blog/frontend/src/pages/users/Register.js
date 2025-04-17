import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/users/register", form);
      const msg = typeof res.data === "string" ? res.data : res.data.message;
      setMessage(msg);

      if (msg === "註冊成功") {
        navigate("/login");
      }
    } catch (err) {
      setMessage("註冊失敗，請檢查欄位是否正確");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="mb-4">註冊帳號</h2>
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
        <button type="submit" className="btn btn-primary">註冊</button>
      </form>
    </div>
  );
};

export default Register;
