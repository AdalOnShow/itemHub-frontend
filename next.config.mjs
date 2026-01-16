/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // add covers.openlibrary.org there
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
    ],
  },
};

export default nextConfig;
