'use client';
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "@/components/ItemList";
import { Divider } from "@mui/material";

export default function Home() {
  const api_url = "/api/v1/products.json?brand=maybelline";
  // next.config.mjs에서 설정한 source와 destination 처럼 위의 url이 연결되서
  // api를 호출하게 된다.
  // 반복문 돌리기 위한 List 설정
  const [list, setList] = useState([]);
  
  function callApi(){
    // 비동기식 통신
    // 엑시오스 호출
    axios.get(api_url).then(function(data){
      //console.log(data.data);
      setList(data.data);
    }); // api를 GET방식으로 호출한다, then: done과 같다. 즉 성공했을때 이 안을 수행한다.
  }

  useEffect(function(){
    callApi();
  },[]); //현재 페이지가 읽혀질 때 한번 호출함

  return (
    <div className={styles.page}>
      {/* 반복문 */}
      
        <div style={{width: '80%', margin: 'auto', padding: '20px'}}>
            <h2>베스트상품</h2>
            <Divider/> {/* 구분선 */}
            <ItemList list = {list.slice(0,9)}/>

            <h2>신상품</h2>
            <Divider/>
            <ItemList list={list.slice(9)}/>
        </div>

    </div>
  );
}
