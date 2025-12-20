import { Seperator, SeperatorProps } from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Seperator',
  component: Seperator,
} as Meta<typeof Seperator>;

export const Primary: StoryFn<SeperatorProps> = () => <Seperator />;

Primary.storyName = 'Seperator';
