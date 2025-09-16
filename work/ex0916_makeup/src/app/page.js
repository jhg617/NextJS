'use client';
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const api_url = "/api/v1/products.json?brand=maybelline";
  // next.config.mjs에서 설정한 source와 destination 처럼 위의 url이 연결되서
  // api를 호출하게 된다.
  
  function callApi(){
    // 비동기식 통신
    // 엑시오스 호출
    axios.get(api_url).then(function(data){
      console.log(data.data);
    }); // api를 GET방식으로 호출한다, then: done과 같다. 즉 성공했을때 이 안을 수행한다.
  }

  useEffect(function(){
    callApi();
  },[]); //현재 페이지가 읽혀질 때 한번 호출함

  return (
    <div className={styles.page}>
      
    </div>
  );
}
