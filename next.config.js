/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SMTP_USER: 'help@octaviaantonyacephas.com',
    SMTP_PASSWORD: 'octavia'
  },
  images: {
    domains: ['robohash.org'],
  },
}

module.exports = nextConfig
