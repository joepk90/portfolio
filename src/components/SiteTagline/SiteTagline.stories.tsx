import { ComponentMeta } from '@storybook/react';
import SiteTagline from '@components/SiteTagline/SiteTagline';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/SiteTagline',
    component: SiteTagline,
} as ComponentMeta<typeof SiteTagline>;

export const Primary = () => <SiteTagline />

Primary.storyName = 'SiteTagline';