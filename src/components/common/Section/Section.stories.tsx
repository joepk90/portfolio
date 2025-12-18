import { PropsWithChildren } from 'react';
import type { StoryFn, Meta } from '@storybook/react';
import { Section, SectionProps, sizeOptions } from '@components/common/Section/Section';

// TODO add option to reset control state
// https://github.com/storybookjs/storybook/issues/11487
const optionsControls = {
  control: {
    type: 'radio',
    options: ['unset', ...sizeOptions],
  },
};

// TODO: setup nested controls in object
// https://github.com/storybookjs/storybook/issues/16089
// https://github.com/storybookjs/storybook/issues/12078#issuecomment-1036316861
export default {
  title: 'Atoms/Section',
  component: Section,
  argTypes: {
    padding: optionsControls,
    paddingTop: optionsControls,
    paddingBottom: optionsControls,
    margin: optionsControls,
    marginTop: optionsControls,
    marginBottom: optionsControls,
    className: { control: { type: 'text' } },
    children: { control: { type: 'text' } },
  },
} as Meta<typeof Section>;

const Template: StoryFn<PropsWithChildren<SectionProps>> = (
  args: PropsWithChildren<SectionProps>,
) => {
  return <Section {...args}></Section>;
};

const lorum = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, deleniti laudantium impedit iusto doloremque libero quo cum eum neque sed sit commodi fuga tempora excepturi consectetur, voluptatem, adipisci quod deserunt.`;

export const Primary = Template.bind({});
Primary.storyName = 'Section';
Primary.args = {
  children: lorum,
};
