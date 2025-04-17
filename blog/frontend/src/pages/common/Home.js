import React from "react";

const Home = () => {
  const isLoggedIn = localStorage.getItem("userId");

  return (
    <div className="text-center">
      <h1 className="mb-4">歡迎來到部落格系統</h1>
      {isLoggedIn ? (
        <p>你已登入，你可以使用部落格文章和修改個人資料的功能。</p>
      ) : (
        <p>請先註冊或登入以開始使用。</p>
      )}
    </div>
  );
};

export default Home;
