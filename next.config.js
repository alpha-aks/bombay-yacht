/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'slelguoygbfzlpylpxfs.supabase.co',
      'i.pinimg.com',
      'in.pinterest.com',
      'images.prismic.io',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
