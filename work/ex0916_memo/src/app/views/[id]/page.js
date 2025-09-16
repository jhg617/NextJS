'use client'
import Item from "@/components/Memo";
import axios from "axios";
import {use, useEffect, useState} from "react";

export default function Page({params}){
    const {idx} = use(params);

    const api_url = `/memo/${idx}.json`;

    const [vo, setVO] = useState({}); //{}: json객체로 들어오는것을 인지한다.

    function getData(){
        axios.get(api_url).then(function(res){
            //데이터가 넘어왔을경우
            setVO(res.data);//json 결과가 vo변수에 저장된다.
        });
    }

    // 현재문서에 id변수의 값이 변경될 때마다 getData함수 호출
    useEffect(function(){
        if(idx && idx > 0)
            getData();
    },[idx]);

    return(
        <div style={{width: '80%', margin: 'auto', padding: '20px'}}>
            <Item item={vo}/>
        </div>
    );
};