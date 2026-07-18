import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Don't fail production builds on lint errors (warnings/unused vars etc.).
    // Lint locally with `npm run lint` instead.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
