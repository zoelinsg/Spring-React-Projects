package com.photos.backend.controller;

import com.photos.backend.model.Photo;
import com.photos.backend.repository.PhotoRepository;
import com.photos.backend.exception.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin
public class PhotoController {

    @Autowired
    private PhotoRepository photoRepository;

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Photo> getPhotoById(@PathVariable Long id) {
        Photo photo = photoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("找不到相片 ID: " + id));
        return ResponseEntity.ok(photo);
    }

    @PostMapping
    public Photo createPhoto(@Valid @RequestBody Photo photo) {
        return photoRepository.save(photo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Photo> updatePhoto(@PathVariable Long id, @Valid @RequestBody Photo newPhoto) {
        Photo updated = photoRepository.findById(id)
                .map(photo -> {
                    photo.setTitle(newPhoto.getTitle());
                    photo.setDescription(newPhoto.getDescription());
                    photo.setUrl(newPhoto.getUrl());
                    return photoRepository.save(photo);
                })
                .orElseThrow(() -> new ResourceNotFoundException("找不到相片 ID: " + id));

        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePhoto(@PathVariable Long id) {
        Photo photo = photoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("找不到相片 ID: " + id));
        photoRepository.delete(photo);
        return ResponseEntity.ok().build();
    }
}
