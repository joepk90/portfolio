const { withGlobalCss } = require('next-global-css')
const withConfig = withGlobalCss()

// remotePatters used for image optimisation, requried for the image component
// could not use <Image> and render <img>, but would lose image optimization benefits
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