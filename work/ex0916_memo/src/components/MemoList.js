"use client"
import { Card, CardContent } from "@mui/material";
import Link from "next/link";
import styles from "./css/MemoList.module.css"

// Page 컴포넌트에서 list 데이터를 props로 전달받음
export default function MemoList({ list }) {
    return (
        <Card style={{width: '500px', margin: '20px auto'}}>
            <CardContent>
                {/* props로 받은 list를 map으로 순회 */}
                {list.map( (item, i) => {
                    return(
                        <Link key={i} href={`/view/${item.idx}`}>
                            <div className="list-item">
                                <h4 className="item-list-h4">{item.content}</h4>
                                <p className="item-list-p">{item.writer}/{item.reg_date}</p>
                            </div>
                        </Link>
                    );
                })}
            </CardContent>
        </Card>
    );
};