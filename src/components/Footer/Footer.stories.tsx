import { Footer } from '@components/Footer/Footer';
import type { Meta } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta<typeof Footer>;

export const Primary = () => <Footer />;

Primary.storyName = 'Footer';
