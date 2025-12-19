import { Tag, TagProps } from '@components/common/Tag/Tag';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',
  component: Tag,
} as Meta<typeof Tag>;

export const Primary: StoryFn<TagProps> = () => <Tag label="Portfolio" />;

Primary.storyName = 'Tag';
