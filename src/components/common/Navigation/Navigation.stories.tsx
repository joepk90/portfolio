import { Navigation, NavigationProps } from '@components';
import { menuItems } from '@config';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Navigation',
  component: Navigation,
  argTypes: {
    variant: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Navigation>;

const Template: StoryFn<NavigationProps> = (args: NavigationProps) => {
  return <Navigation {...args} menuItems={menuItems}></Navigation>;
};

export const Default = Template.bind({});
Default.storyName = 'Navigation';
Default.args = {
  variant: 'dark',
};
