import { render, screen } from '@testing-library/react';
import Seperator from '@components/common/Seperator/Seperator';

const renderMockedElement = () => {
  return render(<Seperator />);
};

describe('seperator component', () => {
  it('should render a component with class name of seperator', () => {
    const { container } = renderMockedElement();
    expect(container.getElementsByClassName('seperator').length).toBe(1);
  });
});
