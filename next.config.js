const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = {
      ...config.externals,
      react: 'React',
      'react-dom': 'ReactDOM',
    };
    return config;
  },
};