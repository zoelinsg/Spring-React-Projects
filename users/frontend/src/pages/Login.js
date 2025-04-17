import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
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
      const res = await axios.post("http://localhost:8080/api/users/login", form);
      const { message, userId } = res.data;

      if (message === "登入成功") {
        localStorage.setItem("userId", userId);
        setMessage("登入成功！");
        navigate("/profile");
      } else {
        setMessage(message);
      }
    } catch (err) {
      setMessage("登入失敗，請確認帳號密碼");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="mb-4">登入</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>使用者名稱</label>
          <input type="text" name="username" className="form-control" required value={form.username} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>密碼</label>
          <input type="password" name="password" className="form-control" required value={form.password} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">登入</button>
      </form>
    </div>
  );
};

export default Login;
