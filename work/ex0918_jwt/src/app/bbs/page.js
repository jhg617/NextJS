import { Table } from "@mui/material";
import Link from "next/link";
import styles from '../page.module.css';

export default function Page(){

    return(
        <div style={{width: '90%', margin:'10px auto'}}>
            <h2>게시판</h2>
            <hr/>
            <table className="t1">
                <thead>
                    <tr>
                        <td colSpan={5} className={styles.no_border}>
                            <Link href='bbs/write'>
                                <button type="button">글쓰기</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th>기본키</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>내용</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>연습입니다.</td>
                        <td>홍길동</td>
                        <td>2025-09-11</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};