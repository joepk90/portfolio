import {
  ReactMarkdownAlias as ReactMarkdown,
  ReactMarkdownProps,
} from '@components/common/ReactMarkdown/ReactMarkdown';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import React from 'react';

export default {
  title: 'Atoms/ReactMarkdown',
  component: ReactMarkdown,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof ReactMarkdown>;

const Template: StoryFn<ReactMarkdownProps> = (args: ReactMarkdownProps) => {
  return <ReactMarkdown {...args}></ReactMarkdown>;
};

const markdown = `# Hello, *world*!
Just a link: https://reactjs.com.`;

export const Primary = Template.bind({});
Primary.storyName = 'ReactMarkdown';
Primary.args = {
  children: markdown,
};
