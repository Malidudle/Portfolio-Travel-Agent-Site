/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.nationalgeographic.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
