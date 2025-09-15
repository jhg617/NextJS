'use client'
import { useState } from "react";

function Page(){
    let title = "인기과목";

    let ar1 = ['자바바이블 예제', '스프링 용어집', 'AI활용'];
    let ar2 = ['2025-09-02', '2025-09-03', '2025-09-05'];
    //let[cnt, setCnt] = useState(0);
    let[cnt, setCnt] = useState([0,0,0]); //숫자 3개를 갖는 배열 초기화

    return(
        <div>
            <h2 className="title">{title}</h2> {/* 데이터 바인딩 */}
            <hr/>
            { /* ar이라는 배열의 요소들을 data라는 변수에
                    전달하면서 반복하는 문장! */
                ar1.map(function(data, i){ /* 배열에 값을 가져와서 함수호출 */
                    return(
                        <div className="box" key={i}> {/* key는 중복되지 않는 값이다. */}
                            <header>
                                <h4>{data}</h4>
                                <p>{ar2[i]}</p>
                                <div>
                                    <img src={`/images/book${i+1}.png`} className="book"/>
                                </div>
                                <div className="fr">
                                    <span>{cnt[i]}</span>&nbsp;
                                    <button onClick={function(){
                                        // 버튼을 클릭할 때마다
                                        // 수행하는 곳이다.
                                        // useState의 값을 증가하자!

                                        // 일단 useState의 값을 복사해온다.
                                        let cnt2 = [...cnt]; // cnt의 내용 복사
                                        // cnt2는 cnt가 기억하고 있는 숫자3개짜리
                                        // 배열을 그대로 복사받는다. 즉, [0,0,0]
                                        ++cnt2[i];
                                        setCnt(cnt2);
                                    }}>+</button>
                                </div>
                            </header>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Page;