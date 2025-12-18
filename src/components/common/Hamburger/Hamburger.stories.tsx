import React from 'react';
import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Hamburger } from './Hamburger'; // TODO setup aliases in storybook..

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Hamburger',
  component: Hamburger,
} as Meta<typeof Hamburger>;

export const Primary = () => <Hamburger onClick={action('Click Handler')}></Hamburger>;

Primary.storyName = 'Hamburger';
