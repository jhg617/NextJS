/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites(){
        return[
            {
                //api로 시작하는 모든 경로
                source: "/api/:path*",
                destination: "http://makeup-api.herokuapp.com/api/:path*"
            }, //다른 openAPI 사용할때 위 블럭안에 소스코드 붙여넣으면 됨
        ]
    }

};


export default nextConfig;
