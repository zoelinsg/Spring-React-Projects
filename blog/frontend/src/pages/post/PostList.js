import React, { useEffect, useState } from "react";
import PostService from "../../services/PostService";
import PostCard from "../../components/post/PostCard";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getAllPosts().then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">文章列表</h2>
      <div className="row">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
