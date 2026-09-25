import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["gsap"],
  },
};

export default nextConfig;
