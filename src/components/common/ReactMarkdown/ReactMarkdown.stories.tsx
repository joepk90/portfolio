import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import {
  ReactMarkdownAlias as ReactMarkdown,
  ReactMarkdownProps,
} from '@components/common/ReactMarkdown/ReactMarkdown';

export default {
  title: 'Atoms/ReactMarkdown',
  component: ReactMarkdown,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof ReactMarkdown>;

const Template: Story<ReactMarkdownProps> = (args: any) => {
  return <ReactMarkdown {...args}></ReactMarkdown>;
};

const markdown = `# Hello, *world*!
Just a link: https://reactjs.com.`;

export const Primary = Template.bind({});
Primary.storyName = 'ReactMarkdown';
Primary.args = {
  children: markdown,
};
