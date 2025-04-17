import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/common/Home";
import Register from "./pages/users/Register";
import Login from "./pages/users/Login";
import Profile from "./pages/users/Profile";
import EditProfile from "./pages/users/EditProfile";
import Logout from "./pages/users/Logout";

// 文章頁面
import PostList from "./pages/post/PostList";
import PostDetail from "./pages/post/PostDetail";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import CategoryPost from "./pages/post/CategoryPost";
import SearchPost from "./pages/post/SearchPost";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          {/* 使用者功能 */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/:id" element={<EditProfile />} />
          <Route path="/logout" element={<Logout />} />

          {/* 文章功能 */}
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/posts/category/:category" element={<CategoryPost />} />
          <Route path="/posts/search" element={<SearchPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
