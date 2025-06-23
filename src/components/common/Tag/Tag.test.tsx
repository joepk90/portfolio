import { render, screen } from '@testing-library/react';
import Tag from '@src/components/common/Tag/Tag';

const tabLabel = 'React';

const renderMockedElement = () => {
  return render(<Tag label={tabLabel} />);
};

describe('Tag component', () => {
  it('should render a component with the label React', () => {
    renderMockedElement();
    expect(screen.getByText(tabLabel)).toBeInTheDocument();
  });

  it('should render a component with the role of listitem', () => {
    renderMockedElement();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
