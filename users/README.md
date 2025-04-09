# Spring Boot + React Users Project
- 以 **Spring Boot** 為後端、**React** 為前端，整合 **MySQL** 資料庫的全端應用，實作使用者資料的註冊、登入、登出、查看使用者資料、修改使用者資料的功能。

## 🔧 功能簡介
- 使用者註冊
- 使用者登入
- 使用者登出
- 查看個人資料
- 修改個人資料（名稱、Email、密碼）

## 🛠 技術架構
- 前端：React（Hooks、Router、Axios、Bootstrap）
- 後端：Spring Boot（Spring Web, Spring Data JPA）
- 資料庫：MySQL
- 開發工具：Maven, npm

## ▶️ 執行方式
- 後端（Spring Boot）
```bash
cd backend
.\mvnw spring-boot:run
```

- 前端（React）
```bash
cd frontend
npm install
npm start
```
- 啟動後打開瀏覽器，網址為：http://localhost:3000