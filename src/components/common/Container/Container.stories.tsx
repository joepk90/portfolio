import { PropsWithChildren } from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Container, Props } from '@components/common/Container/Container';

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
