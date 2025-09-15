'use client'
import { useState } from "react";

function Page(){
    let title = "방명록";

    let ar1 = [{
        title:'자바바이블',
        date:'2025-09-14',
        content:'이렇게 하는건가? 맞겠지?'
    },{ // 한 덩어리가 data에 들어감
        title: '스프링 용어집',
        date: '2025-09-11',
        content: '내용입니다. 확인하시고 적극 활용하세요'
    },{
        title: 'AI활용',
        date: '2025-09-09',
        content: '요즘 트렌디한 AI-Agent개발에 대한 내용입니다.'
    }];

    return(
        <div>
            <h2 className="title">{title}</h2> {/* 데이터 바인딩 */}
            <hr/>
            <div className="list-bg">
                { /* ar이라는 배열의 요소들을 data라는 변수에
                        전달하면서 반복하는 문장! */
                    ar1.map(function(data, i){ /* 배열에 값을 가져와서 함수호출 */
                        return(
                            <div className="list-item" key={i}> {/* key는 중복되지 않는 값이다. */}
                                    <h4>{data.title}</h4>
                                    <p>{data.date}</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Page;