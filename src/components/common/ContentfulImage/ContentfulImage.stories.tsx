import {
  ContentfulImageAlias as ContentfulImage,
  ContentfulImageAliasProps,
} from '@components/common/ContentfulImage/ContentfulImage';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ContentfulImage',
  component: ContentfulImage,
  argTypes: {
    image: {
      fields: {
        file: {
          url: {
            control: { type: 'text' },
          },
        },
      },
    },
  },
} as Meta<typeof ContentfulImage>;

const Template: StoryFn<ContentfulImageAliasProps> = (args: ContentfulImageAliasProps) => {
  return <ContentfulImage {...args}></ContentfulImage>;
};

export const Primary = Template.bind({});
Primary.args = {
  image: {
    fields: {
      title: 'Placeholder image',
      file: {
        url: 'http://via.placeholder.com/300.png',
      },
    },
  },
};
