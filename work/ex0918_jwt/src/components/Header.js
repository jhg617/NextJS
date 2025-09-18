import Link from "next/link";
import Nav from "./Nav";

export default function Header(){
    return(
        <div>
            <div className="navBar"> {/* Nav바 왼쪽에 위치할 요소들 */}
                <Link href="/">Home</Link>
                <Link href="/members">Members</Link>
                <Link href="/bbs">Board</Link>
            </div>
            <div className="fr"> {/* Nav바 오른쪽에 위치할 요소들 */}
                <Link href="/members/login">Login</Link>
                <Link href="/members/signup">Signup</Link>
            </div>
        </div>
    );
};