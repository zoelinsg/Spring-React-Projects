import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/users`);
        const found = res.data.find(u => u.id === parseInt(userId));
        setUser(found);
      } catch (err) {
        console.error("取得使用者資料失敗", err);
      }
    };

    fetchUser();
  }, [userId, navigate]);

  if (!user) return <p>載入中...</p>;

  return (
    <div className="col-md-6 offset-md-3">
      <h2 className="mb-4">個人資料</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>ID：</strong> {user.id}</li>
        <li className="list-group-item"><strong>使用者名稱：</strong> {user.username}</li>
        <li className="list-group-item"><strong>全名：</strong> {user.fullName}</li>
        <li className="list-group-item"><strong>電子郵件：</strong> {user.email}</li>
      </ul>
      <button className="btn btn-primary mt-3" onClick={() => navigate(`/edit/${user.id}`)}>
        編輯個人資料
      </button>
    </div>
  );
};

export default Profile;
