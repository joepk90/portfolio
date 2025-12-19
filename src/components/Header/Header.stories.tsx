import { Header } from '@components/Header/Header';
import type { Meta } from '@storybook/nextjs-vite';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta<typeof Header>;

export const Primary = () => <Header />;

Primary.storyName = 'Header';
