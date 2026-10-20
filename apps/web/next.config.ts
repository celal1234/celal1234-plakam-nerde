import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Paylaşılan paketler TypeScript kaynağı olarak gelir.
  transpilePackages: ["@plakam/api"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
