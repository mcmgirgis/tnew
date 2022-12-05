/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'openaccess-cdn.clevelandart.org',
      'shareyourview.clevelandart.org',
      'openaccess-api.clevelandart.org',
      'web-backend-dev.clevelandart.org',
      'clevelandart.org',
      'static01.nyt.com',
      'piction.clevelandart.org',
    ],
  },
  assetPrefix: process.env.ASSET_BASE_URL,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
