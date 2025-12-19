import { Heading, headingLevels, HeadingProps } from '@components/common/Heading/Heading';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import React from 'react';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: headingLevels,
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Heading>;

const Template: StoryFn<HeadingProps> = (args: HeadingProps) => {
  return <Heading {...args}></Heading>;
};

export const Primary = Template.bind({});
Primary.storyName = 'Heading';
Primary.args = {
  level: 1,
  children: 'Heading Text',
};
