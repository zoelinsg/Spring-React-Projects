package com.photos.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "標題不得為空")
    private String title;

    private String description;

    @NotBlank(message = "請提供圖片 URL")
    private String url;
}
