import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../services/PostService";
import PostCard from "../../components/post/PostCard";

const CategoryPost = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getPostsByCategory(category).then((res) => setPosts(res.data));
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">分類：{decodeURIComponent(category)}</h2>
      <div className="row">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPost;
