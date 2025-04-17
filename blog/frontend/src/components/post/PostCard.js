import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{post.title}</h5>
          <p className="text-muted">分類：{post.category}</p>
          <Link to={`/posts/${post.id}`} className="btn btn-outline-primary mt-auto">
            查看詳情
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
