/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/3d-fluency/94/null/chatbot.png",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
}
module.exports = nextConfig
