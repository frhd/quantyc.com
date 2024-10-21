const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['tailwindcss'] = path.resolve(__dirname, 'node_modules/tailwindcss');
    return config;
  },
};

module.exports = nextConfig;