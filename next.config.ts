/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'], // Add your image domains
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;