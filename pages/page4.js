import React from 'react';
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling

function Page4() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 4</h1>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Hi there! This is Page 4, and there's not much here yet...</p>
        <br />
        <img src="https://facts.net/wp-content/uploads/2023/09/9-astounding-facts-about-meme-faces-1695945988.jpg" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Page4;
