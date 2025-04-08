import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      alert("載入失敗：" + (error.response?.data?.errorMessage || error.message));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadUser();
  }, []);

  if (!user) return <div className="container mt-4">正在載入使用者資料...</div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of user id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Name:</b> {user.name}</li>
                <li className="list-group-item"><b>UserName:</b> {user.username}</li>
                <li className="list-group-item"><b>Email:</b> {user.email}</li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
