import React from "react";

const Home = () => {
  const isLoggedIn = localStorage.getItem("userId");

  return (
    <div className="text-center">
      <h1 className="mb-4">歡迎來到使用者管理系統</h1>
      {isLoggedIn ? (
        <p>你已登入，可以前往「個人資料」或「修改資料」頁面。</p>
      ) : (
        <p>請先註冊或登入以開始使用。</p>
      )}
    </div>
  );
};

export default Home;
