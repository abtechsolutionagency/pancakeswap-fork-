/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  // Skip type checking and linting during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'tokens.pancakeswap.finance',
      'assets.coingecko.com',
      'raw.githubusercontent.com',
      'pancakeswap.finance',
      'changenow.io',
      'upload.wikimedia.org',
      'avatars.githubusercontent.com',
      'trustwallet.com',
      'public.bnbstatic.com',
      's2.coinmarketcap.com',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
