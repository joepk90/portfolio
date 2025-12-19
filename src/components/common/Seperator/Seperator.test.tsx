import { Seperator } from '@components/common';
import { render } from '@testing-library/react';

const renderMockedElement = () => {
  return render(<Seperator />);
};

describe('seperator component', () => {
  it('should render a component with class name of seperator', () => {
    const { container } = renderMockedElement();
    expect(container.getElementsByClassName('seperator').length).toBe(1);
  });
});
