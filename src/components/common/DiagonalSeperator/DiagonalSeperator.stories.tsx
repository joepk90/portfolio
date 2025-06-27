import { ComponentMeta, Story } from '@storybook/react';
import {
  DiagonalSeperator,
  DiagonalSeperatorProps,
} from '@src/components/common/DiagonalSeperator/DiagonalSeperator';
import { BackgroundVariant } from '@src/lib/utilities';

export default {
  title: 'Atoms/DiagonalSeperator',
  component: DiagonalSeperator,
} as ComponentMeta<typeof DiagonalSeperator>;

export const Template: Story<DiagonalSeperatorProps> = () => <DiagonalSeperator />;

Template.storyName = 'DiagonalSeperator';

export const Light = Template.bind({});
Light.storyName = 'Light';
Light.args = {
  backgroundVariant: BackgroundVariant.LightGrey,
};

export const Dark = Template.bind({});
Dark.storyName = 'Dark';
Dark.args = {
  backgroundVariant: BackgroundVariant.LightGrey,
};

export const LightReversed = Template.bind({});
Light.storyName = 'Light Reversed';
Light.args = {
  backgroundVariant: BackgroundVariant.LightGrey,
  reverse: true,
};

export const DarkReversed = Template.bind({});
Dark.storyName = 'Dark Reversed';
Dark.args = {
  backgroundVariant: BackgroundVariant.LightGrey,
  reverse: true,
};
