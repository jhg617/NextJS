'use client'
import Item from "@/components/Item";
import axios from "axios";
import {use, useEffect, useState} from "react";

export default function Page({params}){
    //const id = params.id;
    //const id = `${params.id}`; // $붙여서 사용하려면 앞뒤로 틸트 `` 를 붙여야함
    const {id} = use(params);

    const api_url = `/api/v1/products/${id}.json`;

    const [vo, setVO] = useState({}); //{}: json객체로 들어오는것을 인지한다.

    function getData(){
        axios.get(api_url).then(function(res){
            //데이터가 넘어왔을경우
            setVO(res.data);//json 결과가 vo변수에 저장된다.
        });
    }

    // 현재문서에 id변수의 값이 변경될 때마다 getData함수 호출
    useEffect(function(){
        if(id && id > 0)
            getData();
    },[id]);

    return(
        <div style={{width: '80%', margin: 'auto', padding: '20px'}}>
            <Item item={vo}/>
        </div>
    );
};