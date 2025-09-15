
function Page(){
    let title = "자료실";

    let ar1 = ['자바바이블 예제', '스프링 용어집', 'AI활용'];
    let ar2 = ['2025-9-2', '2025-9-3', '2025-9-5'];

    return(
        <div>
            <h2 className="title">{title}</h2> {/* 데이터 바인딩 */}
            <hr/>
            { /* ar이라는 배열의 요소들을 data라는 변수에
                    전달하면서 반복하는 문장! */
                ar1.map(function(data, i){ /* 배열에 값을 가져와서 함수호출 */
                    return(
                        <p className="box" key={i}> {/* key는 중복되지 않는 값이다. */}
                            <header>
                                <h4>{data}</h4>
                                <p>2025-9-2</p>
                            </header>
                        </p>
                    );
                })
            }

        </div>
    );
}

export default Page;