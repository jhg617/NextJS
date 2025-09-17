import { Button, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BbsList({ar, tp, cp}){
    const router = useRouter(); //이걸로 어디든 이동 가능하다
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}> {/* 스타일 지정 */}
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>제목</TableCell>
                        <TableCell>글쓴이</TableCell>
                        <TableCell>등록일</TableCell>
                        <TableCell>조회수</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {ar.map((row, i) => (
                    <TableRow
                    key={i}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.b_idx}
                    </TableCell>
                    <TableCell align="right">{row.subject}</TableCell>
                    <TableCell align="right">{row.writer}</TableCell>
                    <TableCell align="right">{row.write_date}</TableCell>
                    <TableCell align="right">{row.hit}</TableCell>
                    </TableRow>
                ))}
                {/* 다음은 페이징 기법을 위한 행이 하나 추가되어야 한다. */}
                    <TableRow>
                        <TableCell colSpan={4}>
                            <Pagination count={tp} color="primary" 
                                onChange={cp}/>
                        </TableCell>
                        <TableCell>
                            {/* 
                            <Link href="/board/write">
                            <Button variant="contained" color="primary"
                                onClick={function(){
                                    //현재 글쓰기버튼을 클릭할 때마다 수행하는 곳!

                                }}>
                                    글쓰기
                            </Button>
                            </Link> 
                            */}

                            <Button variant="contained" color="primary"
                                onClick={function(){
                                    //현재 글쓰기버튼을 클릭할 때마다 수행하는 곳!
                                    router.push("/board/write");

                                    // Link : 이동할 페이지 경로가 정해졌을때 사용한다.
                                    // router.push : 이동하기 전에 조건 또는
                                    // 구현되는 로직에 따라 경로가 변경될 때
                                }}>
                                    글쓰기
                            </Button>
                        </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
};