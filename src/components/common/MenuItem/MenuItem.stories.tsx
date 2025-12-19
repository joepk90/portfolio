import { MenuItem, MenuItemProps } from '@components/common/MenuItem/MenuItem'; // TODO setup aliases in storybook..
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import React from 'react';

export default {
  title: 'Atoms/MenuItem',
  component: MenuItem,
  argTypes: {
    id: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    path: {
      control: { type: 'text' },
    },
    variant: {
      options: ['dark', 'light', 'dropdown'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof MenuItem>;

const Template: StoryFn<MenuItemProps> = (args: MenuItemProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      <MenuItem {...args}></MenuItem>
    </ul>
  );
};

export const Primary = Template.bind({});
Primary.storyName = 'MenuItem';
Primary.args = {
  id: '1',
  label: 'Home',
  path: '/home',
  variant: 'dark',
};
