// import Image from 'next/image';
import {
  ContentfulImageAlias as ContentfulImage,
  ContentfulImageProps,
  BrushStrokeSVGClipPath,
  BrushStrokeWrapper,
  BrushStrokeWrapperProps,
} from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/BrushStrokeWrapper',
  component: BrushStrokeWrapper,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof BrushStrokeWrapper>;

const Template: StoryFn<BrushStrokeWrapperProps> = (args: BrushStrokeWrapperProps) => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <div style={{ maxWidth: '300px' }}>
        <BrushStrokeWrapper {...args} />
      </div>
    </>
  );
};

const image: ContentfulImageProps = {
  fields: {
    title: 'placeholder image',
    file: {
      url: 'http://via.placeholder.com/300.png',
    },
  },
};

export const ImageDecoration = Template.bind({});
ImageDecoration.args = {
  children: <ContentfulImage image={image} width={300} height={300} />,
};

export const ElementDecoration = Template.bind({});
ElementDecoration.args = {
  children: <div style={{ width: '300px', height: '300px', background: 'red' }} />,
};
