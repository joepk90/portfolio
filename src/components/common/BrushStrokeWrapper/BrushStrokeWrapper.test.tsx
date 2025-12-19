import { BrushStrokeSVGClipPath } from '@components/common/BrushStroke/BrushStroke';
import { BrushStrokeWrapper } from '@components/common/BrushStrokeWrapper/BrushStrokeWrapper';
import { render, screen } from '@testing-library/react';

const mockedElement = () => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <BrushStrokeWrapper>
        <div
          data-testid="brush-stroke-wrapper-child"
          style={{ width: '300px', height: '300px', background: 'red' }}
        />
      </BrushStrokeWrapper>
    </>
  );
};

describe('BrushStrokeWrapper component', () => {
  it('should render the element used for decoration', () => {
    render(mockedElement());
    expect(screen.queryAllByRole('presentation').length).toBe(2);
  });

  it('should render the child element passed in', () => {
    render(mockedElement());
    expect(screen.getByTestId('brush-stroke-wrapper-child')).toBeInTheDocument();
  });
});
