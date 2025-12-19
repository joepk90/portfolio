import { SiteTitle, SiteTitleProps } from '@components';
import { ThemeVariant } from '@lib';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteTitle',
  component: SiteTitle,
  variant: {
    control: {
      type: 'radio',
      options: ThemeVariant,
    },
  },
} as Meta<typeof SiteTitle>;

export const Primary: StoryFn<SiteTitleProps> = (args: SiteTitleProps) => <SiteTitle {...args} />;

Primary.storyName = 'SiteTitle';
Primary.args = {
  variant: ThemeVariant.Dark,
};
