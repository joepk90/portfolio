import { SiteTagline } from '@components/SiteTagline/SiteTagline';
import type { Meta } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/SiteTagline',
  component: SiteTagline,
} as Meta<typeof SiteTagline>;

export const Primary = () => <SiteTagline />;

Primary.storyName = 'SiteTagline';
