/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["assets.example.com", "img.freepik.com"],
  },
};

// export default nextConfig;
module.exports = nextConfig;
