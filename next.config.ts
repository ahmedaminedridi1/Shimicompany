import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators:false,
  /* config options here */
};
module.exports = {
  allowedDevOrigins: ["croak-mutt-gallstone.ngrok-free.dev"],
};
export default nextConfig;
