/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SMTP_USER: 'help@natalieshaekrula.com',
    SMTP_PASSWORD: '3099545689'
  },
  images: {
    domains: ['robohash.org'],
  },
}

module.exports = nextConfig
