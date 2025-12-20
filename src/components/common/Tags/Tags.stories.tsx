import { Tags, TagsAlignmentVariant, TagsProps } from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

const tagList = ['React', 'Next', 'Javascript', 'PHP', 'HTML'];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Tags',
  component: Tags,
} as Meta<typeof Tags>;

export const Template: StoryFn<TagsProps> = () => <Tags tags={tagList} />;

Template.storyName = 'Tags';

export const Left = Template.bind({});
Left.args = {
  align: TagsAlignmentVariant.Left,
};

export const Right = Template.bind({});
Right.args = {
  align: TagsAlignmentVariant.Right,
};
