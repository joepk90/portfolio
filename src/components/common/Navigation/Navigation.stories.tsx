import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import Navigation, { NavigationProps } from '@components/common/Navigation/Navigation'; // TODO setup aliases in storybook..
import { menuItems } from '@src/config';

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
} as ComponentMeta<typeof Navigation>;

const Template: Story<NavigationProps> = (args: NavigationProps) => {
  return <Navigation {...args} menuItems={menuItems}></Navigation>;
};

export const Default = Template.bind({});
Default.storyName = 'Navigation';
Default.args = {
  variant: 'dark',
};
