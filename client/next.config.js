/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["img.freepik.com"],
  },
};

// export default nextConfig;
module.exports = nextConfig;
