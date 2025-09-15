
export default function Page(props){
    return(
        <div>
            <h1 className="title">상세보기</h1>
            <hr/>
            <div>
                <h2>{props.params.num}</h2> {/* [num]을 값을 정했기 때문에 num으로 사용해야한다.*/ }
            </div>
        </div>
    );
}