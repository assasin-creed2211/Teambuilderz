/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:3001';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${API_URL}/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
