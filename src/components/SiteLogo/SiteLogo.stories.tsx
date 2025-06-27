import { Story, ComponentMeta } from '@storybook/react';
import { ThemeVariant } from '@src/lib/utilities/utilities';
import SiteLogo, { SiteLogoProps } from '@components/SiteLogo/SiteLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteLogo',
  component: SiteLogo,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ThemeVariant,
      },
    },
  },
} as ComponentMeta<typeof SiteLogo>;

export const Primary: Story<SiteLogoProps> = (args: SiteLogoProps) => <SiteLogo {...args} />;

Primary.storyName = 'SiteLogo';
Primary.args = {
  variant: ThemeVariant.Dark,
};
