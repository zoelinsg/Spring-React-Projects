import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const AppNavbar = () => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  useEffect(() => {
    const interval = setInterval(() => {
      setUserId(localStorage.getItem("userId"));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userId && (
              <>
                <NavDropdown title="分類" id="category-dropdown">
                  <NavDropdown.Item as={Link} to="/posts/category/文學">文學</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/posts/category/科技">科技</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/posts/category/工藝">工藝</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/posts/category/其他">其他</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/posts/search">搜尋文章</Nav.Link>
                <Nav.Link as={Link} to="/posts">所有文章</Nav.Link>
                <Nav.Link as={Link} to="/posts/create">新增文章</Nav.Link>
                <Nav.Link as={Link} to="/profile">個人資料</Nav.Link>
                <Nav.Link as={Link} to="/logout">登出</Nav.Link>
              </>
            )}
            {!userId && (
              <>
                <Nav.Link as={Link} to="/register">註冊</Nav.Link>
                <Nav.Link as={Link} to="/login">登入</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
