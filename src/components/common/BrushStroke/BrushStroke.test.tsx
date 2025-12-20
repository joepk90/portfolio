import { BrushStroke, BrushStrokeSVGClipPath } from '@components';
import { render, screen } from '@testing-library/react';

const mockedElement = () => {
  return (
    <>
      <BrushStrokeSVGClipPath />
      <BrushStroke />
    </>
  );
};

describe('BrushStroke component', () => {
  it('should render the element used for decoration', () => {
    render(mockedElement());
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should the clippath element', () => {
    render(mockedElement());
    expect(screen.getByTestId('brush-stroke-clip-path')).toBeInTheDocument();
  });
});
