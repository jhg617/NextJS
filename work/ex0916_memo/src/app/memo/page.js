"use client"
import MemoList from "@/components/MemoList";
import { Card, CardContent, Divider } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
    const api_url = "/memo/all";

    const [list, setList] = useState([]);

    function callAPI(){
        axios.get(api_url).then(function(response){ //response: 개발자가 명명
            setList(response.data.m_list);
            console.log("list" + response.data.m_list)
        });
    }

    useEffect(()=>{
        callAPI();
    },[]); // [] : 현재 페이지가 열릴 때 한번 수행!

    return(
        <div className="list-bg">
            <h2>메모장</h2>
            <Divider/>
            <MemoList list={list}/>
        </div>
    );
};