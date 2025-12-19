import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/ContentfulImage',
  component: ContentfulImage,
  argTypes: {
    image: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => {
  return <ContentfulImage {...args}></ContentfulImage>;
};

export const Primary = Template.bind({});
Primary.storyName = 'ContentfulImage';
Primary.args = {
  image: 'http://via.placeholder.com/300.png',
};
