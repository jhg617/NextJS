'use client'
import Item from "@/components/Memo";
import axios from "axios";
import {use, useEffect, useState} from "react";
import { Button, Card, CardContent, Divider } from "@mui/material";

export default function Page({params}){
    const {idx} = use(params);
    const api_url = `/memo/getMemo?idx=${idx}`;

    //스프링서버로 호출했을 때 하나의 메모정보를 저장할 곳
    const [vo, setVO] = useState({});

    function getMemo(){
        axios.get(api_url).then(function(res){
            //요청된 정보가 넘어왔을때
            setVO(res.data);//json 결과가 vo변수에 저장된다.
        });
    }

    useEffect(function(){
        getData();
    },[idx]);

    return(
        <>
            <Card style={{width: '500px', margin: '20px auto'}}>
                <CardContent>
                    <h3>글쓴이: {vo.writer}, {vo.reg_date}</h3>
                    <p>내용:</p>
                    <div id="content">{vo.content}</div>
                    <Divider/>
                    <Button variant="contained" color="error">
                        뒤로
                    </Button> &nbsp;
                    <Button variant="contained" color="error">
                        편집
                    </Button> &nbsp;
                    <Button variant="contained" color="error">
                        삭제
                    </Button> &nbsp;
                </CardContent>
                {/* {idx} */}
            </Card>
        </>
    );

    /* const api_url = `/memo/${idx}.json`;

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
    ); */
};