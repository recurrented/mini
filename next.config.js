/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/schedule/**"],
    };
    return config;
  },
};

module.exports = nextConfig;
