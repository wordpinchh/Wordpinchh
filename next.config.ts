import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wordpinchh.org' }],
        destination: 'https://www.wordpinchh.org/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
