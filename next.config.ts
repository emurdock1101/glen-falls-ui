import type { NextConfig } from "next";

const wpUrl = process.env.NEXT_PUBLIC_WP_BASE_URL;
let wpHostname = "";

try {
  if (wpUrl) {
    wpHostname = new URL(wpUrl).hostname;
  }
} catch (e) {
  console.error("Invalid NEXT_PUBLIC_WP_BASE_URL", e);
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: wpHostname
      ? [
          {
            protocol: "http",
            hostname: wpHostname,
          },
          {
            protocol: "https",
            hostname: wpHostname,
          },
        ]
      : [],
  },
};

export default nextConfig;
