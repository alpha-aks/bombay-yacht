/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/yacht-web-master' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yacht-web-master/' : '',
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
    unoptimized: process.env.NODE_ENV === 'production',
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
