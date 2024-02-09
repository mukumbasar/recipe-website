import React,{useEffect} from 'react';
import styles from './profilePage.module.css';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { userProfile } = useAuth();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
}, []);

  return (
    <div className={styles["profile-container"]}>
      <div>
        <label>Avatar:</label>
        <img src={userProfile.avatar} alt="Avatar" />
      </div>
      <div>
        <label>Email:</label>
        <div>{userProfile.email}</div>
      </div>
      <div>
        <label>Name:</label>
        <div>{userProfile.name}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
