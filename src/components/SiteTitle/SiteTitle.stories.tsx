import { ComponentMeta, Story } from '@storybook/react';
import { themeVariants } from '@src/lib/utilities/utilities';
import SiteTitle, { SiteTitleProps } from '@components/SiteTitle/SiteTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteTitle',
  component: SiteTitle,
  variant: {
    control: {
      type: 'radio',
      options: themeVariants,
    },
  },
} as ComponentMeta<typeof SiteTitle>;

export const Primary: Story<SiteTitleProps> = (args: SiteTitleProps) => <SiteTitle {...args} />;

Primary.storyName = 'SiteTitle';
Primary.args = {
  variant: 'dark',
};
