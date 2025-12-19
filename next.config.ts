import type { NextConfig } from 'next';
import { withGlobalCss } from 'next-global-css';
import path from 'path';

const withConfig = withGlobalCss();

// Remote patterns used for image optimization
const remotePatterns = [
  {
    protocol: 'https',
    hostname: 'images.ctfassets.net',
    pathname: '**',
  },
] as const satisfies (URL | unknown)[];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'src/styles')],
    // Suppress warnings from deprecated "hamburgers" Sass syntax
    quietDeps: true,
  },
};

// Export using ES module syntax for TypeScript compatibility
export default withConfig(nextConfig);
