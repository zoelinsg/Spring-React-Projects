import React, { useState } from "react";
import PostService from "../../services/PostService";
import PostCard from "../../components/post/PostCard";

const SearchPost = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!keyword.trim()) return;
    PostService.searchPosts(keyword).then((res) => setResults(res.data));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">搜尋文章</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="請輸入關鍵字"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          搜尋
        </button>
      </div>

      <div className="row">
        {results.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default SearchPost;
