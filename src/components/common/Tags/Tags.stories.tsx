import { ComponentMeta, Story } from '@storybook/react';
import Tags, { TagsProps } from '@components/common/Tags/Tags';

const tagList = [
    'React',
    'Next',
    'Javascript',
    'PHP',
    'HTML'
]

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Molecules/Tags',
    component: Tags,
} as ComponentMeta<typeof Tags>;

export const Primary: Story<TagsProps> = () => <Tags tags={tagList} />

Primary.storyName = 'Tags';
