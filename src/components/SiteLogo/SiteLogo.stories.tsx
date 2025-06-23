import { Story, ComponentMeta } from '@storybook/react';
import SiteLogo, { variants, Props } from '@components/SiteLogo/SiteLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteLogo',
  component: SiteLogo,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: variants,
      },
    },
  },
} as ComponentMeta<typeof SiteLogo>;

export const Primary: Story<Props> = (args: Props) => <SiteLogo {...args} />;

Primary.storyName = 'SiteLogo';
Primary.args = {
  variant: 'dark',
};
