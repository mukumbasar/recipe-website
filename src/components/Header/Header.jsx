import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const {isAuthenticated} = useAuth();
  
  return (
    <header className="header">
      <div className="logo">
        <h2>Recipe Platform</h2>
      </div>
      <nav className="navbar">
        <ul>
          {isAuthenticated && <li><Link to="/">Home</Link></li>}
          {isAuthenticated && <li><Link to="profile">Profile</Link></li>}
          <li><Link to="/about">About</Link></li>
          <li><Link to="login">{isAuthenticated ? "Log Out" : "Log In"}</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
