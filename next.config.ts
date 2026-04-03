import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  compress: true,
};

export default nextConfig;
