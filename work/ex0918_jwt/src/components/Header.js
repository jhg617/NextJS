'use client';
import Link from "next/link";
import tokenStore from "@/app/store/TokenStore";
import axios from "axios";
import { useRouter } from "next/navigation";

//export default async function Header(){
export default function Header(){
    //const cookieStore = await cookies();
    //const accessToken = cookieStore.get("accessToken")?.value //값이 있을때 value값을 받는다.
    // cookieStore.get("accessToken")의 값이 있으면 accessToken 변수에
    // 쿠키에 있는 "accessToken"값이 저장되지만 없으면 undefined가 저장된다.

    // 상태관리에 필요한 객체 준비
    const {accessToken, setToken} = tokenStore();
    const api_url = "/api/members/logout";
    const router = useRouter(); //라우터 객체 생성
    function logout(){
        //컨펌받기
        if(confirm("로그아웃 하시겠습니까?"))
        axios.post(
            api_url,{
                withCredentials: true, //이거 없으면 쿠키가 안들어온다.(쿠키처리 시 사용)
            }
        ).then(function(json){
            if(json.status == 200 && json.data.msg == "logout"){
                setToken(null); //Zustand의 값을 null로 초기화
                router.push("/") //sendRedirect로 이동!
            }
        });
    }

    return(
        <div>
            <div className="navBar">
                <Link href="/">Home</Link>
                <Link href="/members">Members</Link>
                <Link href="/bbs">Board</Link>
            </div>
            <div className="fr">
            {
                accessToken == null?
                <Link href="/members/login">Login</Link> :
                <Link href="" onClick={logout}>Logout</Link>
            }
                <Link href="/members/signup">Signup</Link>
            </div>
        </div>
    )
}