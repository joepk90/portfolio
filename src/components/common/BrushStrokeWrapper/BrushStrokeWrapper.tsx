import '@components/common/BrushStrokeWrapper/BrushStrokeWrapper.scss';

import { BrushStroke } from '@components/common';

export type BrushStrokeWrapperProps = {
  children: any;
};

export const BrushStrokeWrapper = ({ children }: BrushStrokeWrapperProps) => {
  return (
    <div className="brush-stroke-wrapper">
      <BrushStroke className="brush-stroke-wrapper__top" />
      {children}
      <BrushStroke className="brush-stroke-wrapper__bottom" />
    </div>
  );
};
