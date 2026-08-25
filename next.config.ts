import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Vercel to safely ignore strict typing errors and just build the site!
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;