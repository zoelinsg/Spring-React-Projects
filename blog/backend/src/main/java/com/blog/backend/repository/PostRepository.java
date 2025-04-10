package com.blog.backend.repository;

import com.blog.backend.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByCategory(String category);
    List<Post> findByTitleContainingIgnoreCase(String keyword);
}
