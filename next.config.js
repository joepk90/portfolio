const { withGlobalCss } = require('next-global-css')
const withConfig = withGlobalCss()

const imageDomains = [
  "images.ctfassets.net"
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: imageDomains,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }
}
module.exports = withConfig(nextConfig)