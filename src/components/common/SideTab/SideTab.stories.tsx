import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { SideTab, SideTabProps } from '@src/components/common/SideTab/SideTab'; // TODO setup aliases in storybook..

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SideTab',
  component: SideTab,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SideTab>;

const Template: Story<SideTabProps> = (args: any) => {
  return <SideTab {...args}></SideTab>;
};

export const Primary = Template.bind({});
Primary.storyName = 'SideTab';
Primary.args = {
  label: 'Project Info',
  children: 'Example content...',
};
