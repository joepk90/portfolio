import { Link, LinkProps } from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<LinkProps> = (args: LinkProps) => {
  const { attributes, ...rest } = args;

  return <Link {...attributes} {...rest}></Link>;
};

export const Primary = Template.bind({});
Primary.storyName = 'Link';
Primary.args = {
  children: 'Link',
};
