import { SectionWithSeperator, SectionWithSeperatorProps } from '@src/components/common';
import { ThemeVariant } from '@src/lib/utilities';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

export default {
  title: 'Atoms/SectionWithSeperator',
  component: SectionWithSeperator,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(ThemeVariant),
    },
  },
} as Meta<typeof SectionWithSeperator>;

export const Template: StoryFn<SectionWithSeperatorProps> = (args) => (
  <SectionWithSeperator {...args} />
);

Template.storyName = 'SectionWithSeperator';

export const Light = Template.bind({});
Light.storyName = 'Light';
Light.args = {
  variant: ThemeVariant.Light,
};

export const Dark = Template.bind({});
Dark.storyName = 'Light';
Dark.args = {
  variant: ThemeVariant.Dark,
};
