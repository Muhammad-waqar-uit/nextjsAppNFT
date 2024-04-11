/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  trailingSlash: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
