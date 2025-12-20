import { Heading, HeadingLevels } from '@components';
import { render, screen } from '@testing-library/react';

const headingText = 'The Title';
const className = 'test-class';

const renderMockedComponent = (level: HeadingLevels = 1) => {
  return render(
    <Heading className="test-class" level={level}>
      {headingText}
    </Heading>,
  );
};

describe('heading component', () => {
  it('should render the provided text', () => {
    renderMockedComponent();
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });

  it('should render an h tag with the specified level', () => {
    const level: HeadingLevels = 2;
    renderMockedComponent(level);
    expect(screen.getByRole('heading', { level })).toBeInTheDocument();
  });

  it('should render an h tag with the provided class name', () => {
    const { container } = renderMockedComponent();
    expect(container.getElementsByClassName(className).length).toBe(1);
  });
});
