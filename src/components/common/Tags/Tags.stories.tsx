import type { StoryFn, Meta } from '@storybook/nextjs-vite';
import { Tags, TagsProps, TagsAlignmentVariant } from '@components/common';

const tagList = ['React', 'Next', 'Javascript', 'PHP', 'HTML'];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Tags',
  component: Tags,
} as Meta<typeof Tags>;

export const Template: StoryFn<TagsProps> = () => <Tags tags={tagList} />;

Template.storyName = 'Tags';

export const Left = Template.bind({});
Left.storyName = 'Left';
Left.args = {
  align: TagsAlignmentVariant.Left,
};

export const Right = Template.bind({});
Right.storyName = 'Right';
Right.args = {
  align: TagsAlignmentVariant.Right,
};
