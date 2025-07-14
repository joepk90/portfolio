import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args: any) => {
  const { attributes, ...rest } = args;

  return <Button {...attributes} {...rest}></Button>;
};

export const Primary = Template.bind({});
Primary.storyName = 'Button';
Primary.args = {
  children: 'button',
};
