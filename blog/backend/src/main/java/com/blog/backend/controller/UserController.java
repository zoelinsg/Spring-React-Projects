package com.blog.backend.controller;

import com.blog.backend.exception.UserNotFoundException;
import com.blog.backend.model.User;
import com.blog.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public Map<String, Object> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            throw new UserNotFoundException("用戶名稱已存在");
        }
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new UserNotFoundException("電子郵件已註冊");
        }
        userRepository.save(user);
        return Map.of("message", "註冊成功");
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User loginUser) {
        User user = userRepository.findByUsername(loginUser.getUsername())
                .orElseThrow(() -> new UserNotFoundException("帳號或密碼錯誤"));
    
        if (!user.getPassword().equals(loginUser.getPassword())) {
            throw new UserNotFoundException("帳號或密碼錯誤");
        }
    
        return Map.of(
            "message", "登入成功",
            "userId", user.getId(),
            "username", user.getUsername()
        );
    }
    
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PutMapping("/{id}")
    public Map<String, Object> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("找不到使用者"));

        user.setUsername(updatedUser.getUsername());
        user.setFullName(updatedUser.getFullName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());

        userRepository.save(user);
        return Map.of("message", "更新成功");
    }

    @DeleteMapping("/{id}")
    public Map<String, Object> deleteUser(@PathVariable Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("找不到使用者");
        }
        userRepository.deleteById(id);
        return Map.of("message", "使用者已刪除");
    }
}
