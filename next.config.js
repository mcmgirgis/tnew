/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/template': { page: '/tnew_template' },
    };
  },
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
    unoptimized: true, // Required for next export
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
