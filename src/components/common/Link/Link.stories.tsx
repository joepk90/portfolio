import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { Link, LinkProps } from '@src/components/common';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: Story<LinkProps> = (args: any) => {
  const { attributes, ...rest } = args;

  return <Link {...attributes} {...rest}></Link>;
};

export const Primary = Template.bind({});
Primary.storyName = 'Link';
Primary.args = {
  children: 'Link',
};
