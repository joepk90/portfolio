import { ComponentMeta, Story } from '@storybook/react';
import { SectionWithSeperator, SectionWithSeperatorProps } from '@src/components/common';
import { ThemeVariant } from '@src/lib/utilities';

export default {
  title: 'Atoms/SectionWithSeperator',
  component: SectionWithSeperator,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(ThemeVariant),
    },
  },
} as ComponentMeta<typeof SectionWithSeperator>;

export const Template: Story<SectionWithSeperatorProps> = (args) => (
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
