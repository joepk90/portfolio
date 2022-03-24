import { ComponentMeta } from '@storybook/react';
import SiteLogo from '@components/SiteLogo/SiteLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/SiteLogo',
    component: SiteLogo,
} as ComponentMeta<typeof SiteLogo>;

export const Primary = () => <SiteLogo />

Primary.storyName = 'SiteLogo';