"use client"
import { Divider, Table, TableBody, TableContainer, TableHead } from "@mui/material";
import Link from "next/link";
import styles from '../../page.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import tokenStore from "@/app/store/TokenStore";
import axios from "axios";

export default function Page(){

        const [member, setMember] = useState({});
        const router = useRouter();

        const {accessToken, setToken} = tokenStore();
        let api_url = "/api/members/login";

        function signIn(){
            axios.post(
                api_url, JSON.stringify(member),
                {
                    withCredentials: true,
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            ).then(function(res){
                if(res.status == 200){
                    setToken(res.data.data.accessToken);
                    router.push("/"); // 메인화면으로 이동
                }
            });
        }

        function handleChange(e){
            const {name, value} = e.target;
            setMember({...member, [name]: value})
            console.log({...member, [name]: value})
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