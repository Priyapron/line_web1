import React from 'react';
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling

function Page3() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 3</h1>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Hi there! This is Page 3, and there's not much here yet...</p>
        <br />
        <img src="https://miro.medium.com/v2/resize:fit:1358/1*GI-td9gs8D5OKZd19mAOqA.png" alt="Your Image" style={{ width: '500px', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Page3;
