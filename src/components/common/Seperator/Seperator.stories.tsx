import type { StoryFn, Meta } from '@storybook/react';
import { Seperator, SeperatorProps } from '@components/common/Seperator/Seperator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Seperator',
  component: Seperator,
} as Meta<typeof Seperator>;

export const Primary: StoryFn<SeperatorProps> = () => <Seperator />;

Primary.storyName = 'Seperator';
