const { withGlobalCss } = require('next-global-css')
const withConfig = withGlobalCss()

const remotePatterns = [
  {
    protocol: 'https',
    hostname: 'images.ctfassets.net',
    pathname: '**',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: remotePatterns,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};
module.exports = withConfig(nextConfig)