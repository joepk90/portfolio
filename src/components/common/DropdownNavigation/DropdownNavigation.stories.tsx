import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import DropdownNavigation, {
  Props,
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
} as ComponentMeta<typeof DropdownNavigation>;

const Template: Story<Props> = (args: any) => {
  return (
    <DropdownNavigation {...args} menuItems={menuItems} variant="dropdown"></DropdownNavigation>
  );
};

export const Primary = Template.bind({});
Primary.storyName = 'DropdownNavigation';
Primary.args = {
  isOpen: true,
};
