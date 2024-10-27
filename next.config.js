const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['tailwindcss'] = path.resolve(__dirname, 'node_modules/tailwindcss');
    return config;
  },
};

module.exports = nextConfig;