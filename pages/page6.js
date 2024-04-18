import React from 'react';
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling

function Page6() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 6</h1>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Hi there! This is Page 6, and there's not much here yet...</p>
        <br />
        <img src="https://ih1.redbubble.net/image.2945074451.0917/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Page6;
