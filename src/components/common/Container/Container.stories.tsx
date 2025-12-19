import { Container, Props } from '@components/common/Container/Container';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';
import { PropsWithChildren } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Container',
  component: Container,
  argTypes: {
    fullWidth: { control: { type: 'boolean' } },
    noWrap: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
} as Meta<typeof Container>;

const Template: StoryFn<PropsWithChildren<Props>> = (args: Props) => {
  return <Container {...args}></Container>;
};

const lorum = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, deleniti laudantium impedit iusto doloremque libero quo cum eum neque sed sit commodi fuga tempora excepturi consectetur, voluptatem, adipisci quod deserunt.`;

export const Primary = Template.bind({});
Primary.storyName = 'Container';
Primary.args = {
  children: lorum,
};
