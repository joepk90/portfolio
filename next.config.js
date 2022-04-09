const { withGlobalCss } = require('next-global-css')
const withConfig = withGlobalCss()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  }
}
module.exports = withConfig(nextConfig)