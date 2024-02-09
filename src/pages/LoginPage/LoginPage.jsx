import React, { useState, useEffect } from 'react';
import styles from './loginPage.module.css';
import { fetchUserProfile, logIn, logOut } from "../../services/authService";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(null);

  const {setIsAuthenticated, isAuthenticated, setUserProfile} = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      logOut(setIsAuthenticated);
    }
}, []);

  const handleLogin = (e) => {
    e.preventDefault();
    logIn(username, password,setIsAuthenticated)
      .then(message => {
        setLoginMessage(message);
        fetchUserProfile(setUserProfile);
        navigate('/');
      })
      .catch(error => {
        setLoginMessage(error.message);
      });
  };

  return (
    <div className={styles["login-page-container"]}>
      <form className={styles["login-form"]} onSubmit={handleLogin}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username:' required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password:' required />
        {loginMessage && <div className={styles["login-message"]}>{loginMessage}</div>} 
        <div className={styles["button-container"]}>
          <button type='submit'>Log In</button>
        </div>
      </form>
      <div className={styles["login-hint"]}>
        <p>Email: john@mail.com</p>
        <p>Password: changeme</p>
      </div>
    </div>
    
  );
};

export default LoginPage;
