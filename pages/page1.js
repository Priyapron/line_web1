import React, { useEffect } from 'react';
import Link from 'next/link'; // ใช้ Link จาก Next.js
import styles from "@/styles/Page1.module.css"; // Import CSS module for styling
// อ้างอิง LIFF SDK
import liff from '@line/liff';

function Page1() {
  useEffect(() => {
    // เรียกใช้งาน LIFF
    liff.init({ liffId: '2004258338-8Zr5WyLB' }).then(() => {
      if (liff.isLoggedIn()) {
        // ดึงข้อมูลโปรไฟล์ผู้ใช้ Line
        liff.getProfile().then(profile => {
          const imageUrl = profile.pictureUrl;
          const name = profile.displayName;

          // แสดงภาพโปรไฟล์และชื่อผู้ใช้
          document.getElementById('profileImage').src = imageUrl;
          document.getElementById('userName').innerText = name;
        });
      } else {
        liff.login();
      }
    }).catch(error => {
      console.error('Error initializing LIFF: ', error);
    });
  }, []); // ให้ useEffect ทำงานเฉพาะครั้งแรกเมื่อ component ถูก render

  return (
    <div className={`${styles.main} ${styles.container}`}>
      <h1 className={styles.heading}>Welcome to Page 1</h1>
      <Link href="/" passHref>
        <p className={styles.link}>Go back to Home</p>
      </Link>
      <div className={`${styles.description} ${styles.textbox}`}>
        <p>Line Profile</p>
        <br />
        <img id="profileImage" alt="Your Image" style={{ width: '450px', height: 'auto' }} />
        <p id="userName"></p>
      </div>
    </div>
  );
}

export default Page1;
