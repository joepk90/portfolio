import React from 'react';
import type { StoryFn, Meta } from '@storybook/nextjs-vite';
import { Button, ButtonProps } from '@src/components/common/Button/Button'; // TODO setup aliases in storybook..

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    attributes: {
      control: { type: 'object' },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args: any) => {
  const { attributes, ...rest } = args;

  return <Button {...attributes} {...rest}></Button>;
};

export const Primary = Template.bind({});
Primary.storyName = 'Button';
Primary.args = {
  children: 'button',
};
