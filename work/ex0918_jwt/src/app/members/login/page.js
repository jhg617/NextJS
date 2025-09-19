"use client"
import { Divider, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import Link from "next/link";
import styles from '../../page.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(){

        const [member, setMember] = useState({});

        const router = useRouter();
    
        function handleChange(e){
            const {name, value} = e.target;
            setBbs({...member, [name]: value})
            console.log({...member, [name]: value})
        }

        function signIn(){
            // 비동기식 통신(스프링부트 서버 호출)

            // 정상적으로 서버로부터 처리가 되었는지 확인

            // 받은 토큰을 저장(store 개념)
            router.push('/')
        }

    return(
        <div style={{width: '90%', margin: '10px auto'}}>
            <h2>로그인</h2>
            <Divider/>
            <div style={{width: '250px', margin: '10px auto'}}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="u_id">
                                사용자 ID
                                </label>
                            </td>
                            <td>
                                <input type="text" id= 'u_id' name="mid" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="u_pw">
                                사용자 PW
                                </label>
                            </td>
                            <td>
                                <input type="password" id= 'u_pw' name="mpw" onChange={handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} className={styles.txtCenter}>
                                <button type="button" onClick={signIn}>로그인</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
};