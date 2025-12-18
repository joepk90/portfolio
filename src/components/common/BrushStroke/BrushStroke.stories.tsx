import { Story, ComponentMeta } from '@storybook/react';
import {
  BrushStroke,
  BrushStrokeProps,
  BrushStrokeSVGClipPath,
} from '@components/common/BrushStroke/BrushStroke';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/BrushStroke',
  component: BrushStroke,
  argTypes: {},
} as ComponentMeta<typeof BrushStroke>;

export const Primary: Story<BrushStrokeProps> = (args: BrushStrokeProps) => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <BrushStroke {...args} />
    </>
  );
};

Primary.storyName = 'BrushStroke';
Primary.args = {};
