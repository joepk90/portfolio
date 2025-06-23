import { ComponentMeta, Story } from '@storybook/react';
import SiteTitle, { variants, Props } from '@components/SiteTitle/SiteTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteTitle',
  component: SiteTitle,
  variant: {
    control: {
      type: 'radio',
      options: variants,
    },
  },
} as ComponentMeta<typeof SiteTitle>;

export const Primary: Story<Props> = (args: Props) => <SiteTitle {...args} />;

Primary.storyName = 'SiteTitle';
Primary.args = {
  variant: 'dark',
};
