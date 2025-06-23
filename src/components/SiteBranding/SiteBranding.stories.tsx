import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SiteBranding } from '@components/SiteBranding/SiteBranding';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'molecules/SiteBranding',
  component: SiteBranding,
} as ComponentMeta<typeof SiteBranding>;

export const Primary = () => <SiteBranding />;

Primary.storyName = 'SiteBranding';
