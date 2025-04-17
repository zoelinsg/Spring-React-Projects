import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-bar">
      <div className="navbar-content">
        <Link to="/" className="navbar-link">相簿首頁</Link>
        <Link to="/upload" className="navbar-link">上傳相片</Link>
      </div>
    </nav>
  );
};

export default Navbar;
