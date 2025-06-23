import { ComponentMeta, Story } from '@storybook/react';
import Tag, { TagProps } from '@components/common/Tag/Tag';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Primary: Story<TagProps> = () => <Tag label="Portfolio" />;

Primary.storyName = 'Tag';
