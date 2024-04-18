import React from 'react';
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling

function Page2() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 2</h1>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Hi there! This is Page 2, and there's not much here yet...</p>
        <br />
        <img src="https://www.replicon.com/wp-assets/uploads/2023/09/Running-Away-Balloon.jpg" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Page2;
