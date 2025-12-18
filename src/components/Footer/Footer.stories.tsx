import { ComponentMeta } from '@storybook/react';
import { Footer } from '@components/Footer/Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Primary = () => <Footer />;

Primary.storyName = 'Footer';
