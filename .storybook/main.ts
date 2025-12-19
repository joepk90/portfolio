// .storybook/main.ts
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: '@storybook/nextjs-vite',
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links', '@storybook/addon-docs'],

  viteFinal: async (viteConfig) => {
    // Add TS path aliases
    viteConfig.plugins = [...(viteConfig.plugins || []), tsconfigPaths()];

    // Add SCSS aliases
    viteConfig.resolve = viteConfig.resolve || {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias || {}),
      // TODO investigate solution to handle these aliases in a single place (ideally nextjs config)
      '@components': path.resolve('./src/components'),
      base: path.resolve('./src/styles/base'),
      helpers: path.resolve('./src/styles/helpers'),
      global: path.resolve('./src/styles/global'),
    };

    return viteConfig;
  },
};

export default config;
