import { DiagonalSeperator, DiagonalSeperatorProps } from '@components';
import { BackgroundVariant } from '@lib';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

export default {
  title: 'Atoms/DiagonalSeperator',
  component: DiagonalSeperator,
} as Meta<typeof DiagonalSeperator>;

export const Template: StoryFn<DiagonalSeperatorProps> = () => <DiagonalSeperator />;

Template.storyName = 'DiagonalSeperator';

export const Light = Template.bind({});
Light.args = {
  backgroundVariant: BackgroundVariant.LightGrey,
};

export const Dark = Template.bind({});
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
