import { Tags } from '@src/components/common';
import { render, screen } from '@testing-library/react';

const tagList = ['React', 'Next', 'Javascript'];

const renderMockedElement = () => {
  return render(<Tags tags={tagList} />);
};

describe('Tags component', () => {
  it('should render tags component with role of list', () => {
    renderMockedElement();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render the 3 tag components', () => {
    renderMockedElement();
    expect(screen.getAllByRole('listitem').length).toBe(3);
  });

  it('should render the 3 tag components', () => {
    renderMockedElement();
    expect(screen.getByText(tagList[0])).toBeInTheDocument();
  });
});
