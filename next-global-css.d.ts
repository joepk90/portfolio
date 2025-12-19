declare module 'next-global-css' {
  import type { NextConfig } from 'next';

  export function withGlobalCss(): (config: NextConfig) => NextConfig;
}
