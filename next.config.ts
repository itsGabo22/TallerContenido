import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gaseosaslacigarra.co',
      },
    ],
  },
};

export default nextConfig;
