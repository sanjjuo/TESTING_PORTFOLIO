import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.simpleicons.org",
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
    ],
  },
};

export default nextConfig;
