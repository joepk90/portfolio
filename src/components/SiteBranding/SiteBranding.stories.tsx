import React from 'react';
import type { Meta } from '@storybook/react';
import { SiteBranding } from '@components/SiteBranding/SiteBranding';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/SiteBranding',
  component: SiteBranding,
} as Meta<typeof SiteBranding>;

export const Primary = () => <SiteBranding />;

Primary.storyName = 'SiteBranding';
