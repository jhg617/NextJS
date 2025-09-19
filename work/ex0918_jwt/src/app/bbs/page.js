"use client"
import { Divider, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import Link from "next/link";
import styles from '../page.module.css';
import { useEffect, useState } from "react";
import axios, { get } from "axios";
import BbsTR from "@/components/BbsTR";

export default function Page(){

    const api_url = '/api/bbs';

    // 서버로부터 받은 배열을 저장할 곳
    const [list, setList] = useState([]);

    // 비동기식 통신을 수행하는 함수
    function getBbsList(){
        axios.get(api_url).then(function(json){
            // 서버로부터 결과를 받았을 때 수행

            // 서버로부터 넘어온 자원들은 모두 json.data에 있다
            if(json.data.totalCount > 0){
                setList(json.data.data);
            }
        })
    }

    // 한번만 호출하는 함수
    useEffect(()=>{getBbsList();},[]);

    return(
        <div style={{width: '90%', margin: '10px auto'}}>
            <h2>게시판</h2>
            <Divider/>
            <table className="t1">
                <thead>
                    <tr>
                        <td colSpan={5} className={styles.no_border}>
                            <Link href='bbs/write'>
                            <button type="button">글쓰기</button></Link>
                        </td>
                    </tr>
                    <tr>
                        <th>기본키</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, i) => (
                                <BbsTR key={i} index={i} item={item}/>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
};