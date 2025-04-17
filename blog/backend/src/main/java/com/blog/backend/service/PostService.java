package com.blog.backend.service;

import com.blog.backend.model.Post;
import com.blog.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Post not found with ID: " + id));
    }

    public Post createPost(Post post) {
        post.setCreatedAt(LocalDateTime.now().toString());
        return postRepository.save(post);
    }

    public Post updatePost(Long id, Post updatedPost) {
        Post post = getPostById(id);
    
        if (!Objects.equals(post.getAuthorId(), updatedPost.getAuthorId())) {
            throw new RuntimeException("你無權修改這篇文章");
        }
    
        post.setTitle(updatedPost.getTitle());
        post.setContent(updatedPost.getContent());
        post.setCategory(updatedPost.getCategory());
    
        return postRepository.save(post);
    }

    public void deletePost(Long id, Long requesterId) {
        Post post = getPostById(id);
        if (!Objects.equals(post.getAuthorId(), requesterId)) {
            throw new RuntimeException("你無權刪除這篇文章");
        }
        postRepository.deleteById(id);
    }

    public List<Post> searchByKeyword(String keyword) {
        return postRepository.findByTitleContainingIgnoreCase(keyword);
    }

    public List<Post> filterByCategory(String category) {
        return postRepository.findByCategory(category);
    }
}
