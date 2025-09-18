'use client';
import { Table } from "@mui/material";
import Link from "next/link";
import styles from '../../page.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(){
    const router = useRouter();

    const api_url = "/member/login";

    const[member, setMember] = useState({});

    function handleChange(e){
        // 사용자가 입력한 값들을 객체로 변경하는 함수
        let {name, value} = e.target;
        setMember({...member, [name]:value});
    }

    function signIn(){
        //비동기식 통신

        //정상적으로 서버로부터 처리가 되었는지? 확인

        // 받은 토큰을 저장해야함(store개념)

        router.push("/") //메인페이지로 이동!
    }

    return(
        <div style={{width: '90%', margin:'10px auto'}}>
            <h2>로그인</h2>
            <hr/>
            <div style={{width: '250px', margin:'10px auto'}}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="u_id">사용자ID</label>
                        </td>
                        <td>
                            <input type="text" id="u_id"
                                name="mid"
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="u_pw">사용자PW</label>
                        </td>
                        <td>
                            <input type="password" id="u_pw"
                                name="mpw"
                                onChange={handleChange}/>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2} className={styles.txtCenter}>
                            <button type="button" onClick={signIn}>
                                로그인
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    );
};