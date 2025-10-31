/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'alphas.cdn.prismic.io',
      'images.unsplash.com',
      'source.unsplash.com',
      'slelguoygbfzlpylpxfs.supabase.co',
      'i.pinimg.com',
      'in.pinterest.com',
      'images.prismic.io'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    typedRoutes: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
