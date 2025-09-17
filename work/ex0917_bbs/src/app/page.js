'use client';
import styles from "./page.module.css";

import { Divider } from "@mui/material";

export default function Home() {
  

  return (
    <div className={styles.page}>
      {/* 반복문 */}
      
        <div style={{width: '90%', margin: 'auto', padding: '20px'}}>
            <h2>SIST연습 페이지</h2>
            <Divider/> {/* 구분선 */}
            
        </div>

    </div>
  );
}
