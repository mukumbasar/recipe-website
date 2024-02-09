import React from 'react';
import styles from './aboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles["about-page-container"]}>
      <h1>About Recipe Platform</h1>
      <div className={styles["content"]}>
        <p>Welcome to Recipe Platform, your ultimate destination for discovering and sharing delicious recipes! Whether you're a seasoned chef or a cooking novice, our platform is designed to inspire and empower you to create mouthwatering dishes in your own kitchen.</p>
        <p>At Recipe Platform, you'll find a vast collection of recipes spanning various cuisines, dietary preferences, and cooking skill levels. From quick and easy weekday meals to indulgent desserts and gourmet feasts, there's something for everyone.</p>
        <p>Our mission is to make cooking enjoyable and accessible to all. We believe that food brings people together and that everyone can experience the joy of preparing and sharing homemade meals with loved ones.</p>
        <p>Join our vibrant community of food enthusiasts, explore new culinary adventures, and share your favorite recipes with others. Let's embark on a delicious journey together!</p>
      </div>
    </div>
  );
}

export default AboutPage;
