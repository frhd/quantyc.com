const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, 'node_modules/react-dom');
    config.resolve.alias['tailwindcss'] = path.resolve(__dirname, 'node_modules/tailwindcss');
    return config;
  },
};

module.exports = nextConfig;