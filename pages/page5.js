import React from 'react';
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling

function Page5() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 5</h1>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Hi there! This is Page 5, and there's not much here yet...</p>
        <br />
        <img src="https://i.kym-cdn.com/entries/icons/facebook/000/045/575/blackcatzoningout_meme.jpg" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Page5;
