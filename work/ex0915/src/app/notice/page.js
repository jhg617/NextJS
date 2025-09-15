import NoticeTR from "@/components/noticeTR";
export default function bbs(){
    let subject = ['가을이 코앞에', '리엑트 좋네', '테스트입니다.']

    return(
        <div>
            <h1 className="title">게시판</h1>
            <hr/>
            <table className="t1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 다음은 컴포넌트를 활용한 예다. */}
                    <NoticeTR subject={subject[0]} writer="hgjeon" reg_date="2025-09-11"/>
                    <NoticeTR subject={subject[1]} writer="마루치" reg_date="2025-09-09"/>
                    <NoticeTR subject={subject[2]} writer="이도" reg_date="2025-09-07"/>
                </tbody>
            </table>
        </div>
    );
};