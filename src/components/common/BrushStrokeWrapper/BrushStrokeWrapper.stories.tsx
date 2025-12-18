import { Story, ComponentMeta } from '@storybook/react';
import { BrushStrokeSVGClipPath } from '@components/common/BrushStroke/BrushStroke';
// import Image from 'next/image';
import { ContentfulImageAlias as ContentfulImage } from '@components/common/ContentfulImage/ContentfulImage';

import {
  BrushStrokeWrapper,
  BrushStrokeWrapperProps,
} from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';

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
} as ComponentMeta<typeof BrushStrokeWrapper>;

const Template: Story<BrushStrokeWrapperProps> = (args: BrushStrokeWrapperProps) => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <div style={{ maxWidth: '300px' }}>
        <BrushStrokeWrapper {...args} />
      </div>
    </>
  );
};

// const image = () =>
export const ImageDecoration = Template.bind({});
ImageDecoration.args = {
  children: <ContentfulImage image="http://via.placeholder.com/300.png" width={300} height={300} />, // TODO replace with nextjs Image
};

export const ElementDecoration = Template.bind({});
ElementDecoration.args = {
  children: <div style={{ width: '300px', height: '300px', background: 'red' }} />,
};
