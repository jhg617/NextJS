"use client"
import { Divider, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page(){

    //서버url
    const api_url = "/api/bbs/write"

    //사용자가 입력한 값들을 하나의 객체로 저장할 곳
    const [bbs, setBbs] = useState({});

    const router = useRouter();

    function handleChange(e){
        const {name} = e.target;
        const {value} = e.target;
        setBbs({...bbs, [name]: value})
        console.log({...bbs, [name]: value})
    }

    function sendBbs(){
        // 비동기식 통신(스프링부트 서버 호출)
        axios.post(
            api_url,
            JSON.stringify(bbs),
            {
                headers:{
                    "Content-Type": "application/json"
                }
            }
        ).then(function(json){
            if(json.data.totalCount > 0){
                router.push("/bbs");
            }
        })
    }

    return(
        <div style={{width: '90%', margin: '10px auto'}}>
            <h2>글쓰기</h2>
            <Divider/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>
                            <input type="text" id="title" name="title" onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td colSpan={3}>
                            <input type="text" id="writer" name="writer" onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>
                            <textarea cols={40} rows={5} id="content" name="content" onChange={handleChange}>
                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link href="/bbs">
                                <button type="button">뒤로</button>
                            </Link>
                            &nbsp;
                            <button type="button" onClick={sendBbs}>저장</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};