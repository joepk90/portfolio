import { ComponentMeta, Story } from '@storybook/react';
import {
  SectionWithSeperator,
  SectionWithSeperatorProps,
  SectionWithSeperatorVariant,
} from '@src/components/common';

export default {
  title: 'Atoms/SectionWithSeperator',
  component: SectionWithSeperator,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(SectionWithSeperatorVariant),
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
  variant: SectionWithSeperatorVariant.Light,
};

export const Dark = Template.bind({});
Dark.storyName = 'Light';
Dark.args = {
  variant: SectionWithSeperatorVariant.Dark,
};
