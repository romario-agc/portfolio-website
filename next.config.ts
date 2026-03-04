import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Sanity CDN + local images
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

export default nextConfig;
