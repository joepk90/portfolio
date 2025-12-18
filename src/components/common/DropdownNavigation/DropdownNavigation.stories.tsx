import React from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import {
  DropdownNavigation,
  DropdownNavigationProps,
} from '@src/components/common/DropdownNavigation/DropdownNavigation'; // TODO setup aliases in storybook..
import { menuItems } from '@src/config';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/DropdownNavigation',
  component: DropdownNavigation,
  argTypes: {
    isOpen: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof DropdownNavigation>;

const Template: StoryFn<DropdownNavigationProps> = (args: any) => {
  return (
    <DropdownNavigation {...args} menuItems={menuItems} variant="dropdown"></DropdownNavigation>
  );
};

export const Primary = Template.bind({});
Primary.storyName = 'DropdownNavigation';
Primary.args = {
  isOpen: true,
};
