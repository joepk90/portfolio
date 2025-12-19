import { BrushStroke, BrushStrokeProps, BrushStrokeSVGClipPath } from '@components';
import type { Meta, StoryFn } from '@storybook/nextjs-vite';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/BrushStroke',
  component: BrushStroke,
  argTypes: {},
} as Meta<typeof BrushStroke>;

export const Primary: StoryFn<BrushStrokeProps> = (args: BrushStrokeProps) => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <BrushStroke {...args} />
    </>
  );
};

Primary.storyName = 'BrushStroke';
Primary.args = {};
