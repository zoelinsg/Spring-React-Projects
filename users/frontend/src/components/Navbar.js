import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  // 監聽 localStorage 的變化（跨頁面也會更新）
  useEffect(() => {
    const checkUserId = () => {
      setUserId(localStorage.getItem("userId"));
    };

    window.addEventListener("storage", checkUserId);
    return () => {
      window.removeEventListener("storage", checkUserId);
    };
  }, []);

  // 如果 Logout 頁面只是清除 localStorage，也可以在那頁 navigate 之後主動呼叫 setUserId(null)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          使用者系統
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!userId ? (
              <>
                <Nav.Link as={Link} to="/register">註冊</Nav.Link>
                <Nav.Link as={Link} to="/login">登入</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile">個人資料</Nav.Link>
                <Nav.Link as={Link} to="/logout">登出</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
