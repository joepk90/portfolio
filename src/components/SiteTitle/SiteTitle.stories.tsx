import { ComponentMeta } from '@storybook/react';
import SiteTitle from '@components/SiteTitle/SiteTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Atoms/SiteTitle',
    component: SiteTitle,
} as ComponentMeta<typeof SiteTitle>;

export const Primary = () => <SiteTitle />

Primary.storyName = 'SiteTitle';