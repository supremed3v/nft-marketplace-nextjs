/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["dummyimage.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
