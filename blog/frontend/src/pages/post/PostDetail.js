import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PostService from "../../services/PostService";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    PostService.getPost(id).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("確定要刪除這篇文章嗎？")) {
      await PostService.deletePost(post.id, userId);
      navigate("/posts");
    }
  };

  if (!post) return <div className="container mt-4">載入中...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{post.title}</h2>
      <p className="text-muted">分類：{post.category}</p>
      <p>{post.content}</p>

      {String(post.authorId) === userId && (
        <div className="mt-3">
          <Link to={`/posts/edit/${post.id}`} className="btn btn-warning me-2">
            編輯
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            刪除
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
