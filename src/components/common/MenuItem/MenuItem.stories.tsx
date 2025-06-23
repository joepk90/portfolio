import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import MenuItem, { MenuItemProps } from '@components/common/MenuItem/MenuItem'; // TODO setup aliases in storybook..

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
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = (args: any) => {
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
