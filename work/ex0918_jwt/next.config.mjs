/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return[
            {
                source: "/api/:path*",
                destination: "http://3.39.177.130:8080/api/:path*"
            }
        ]
    }
};

export default nextConfig;
