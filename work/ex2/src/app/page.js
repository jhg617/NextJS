"use client" //변수 값을 변경하려면 필수로 명시해야 한다.(서버 컴포넌트(정적) -> 클라이언트 컴포넌트(동적)로 변경하고자 할때 지정)
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react"; //클라이언트 컴포넌트로 변동된다.

export default function Home() {
  let title = "SIST";
  let title2 = "쌍용교육센터";
  const [sub, setSub] = useState("hgjeon"); //[sub, setSub] sub의 변수값을 변경하고자 할때 setSub를 호출해야함
  return (
    <div className={styles.page}>
      <h1 className="title">{title}</h1>
      <h2 className={styles.redcolor}>{title}</h2>
      <h2>{sub}</h2>
    </div>
  );
}
