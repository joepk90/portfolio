import { Container } from '@components/common';
import { render, screen } from '@testing-library/react';

const lorum = `Lorem ipsum dolor`;

describe('container component', () => {
  it('should render children', () => {
    render(<Container>{lorum}</Container>);
    expect(screen.getByText('Lorem ipsum dolor')).toBeInTheDocument();
  });

  it('should render the passed in class name', () => {
    const { container } = render(<Container className="test-class">{lorum}</Container>);
    expect(container.getElementsByClassName('test-class').length).toBe(1);
  });

  // TODO test css properties?

  // it('should have a max-width of 100%', () => {
  // const lorum = `Lorem ipsum dolor`
  // render(<Container fullWidth={true}>{lorum}</Container>)
  // });

  // it('should have no padding', () => {
  // const lorum = `Lorem ipsum dolor`
  // render(<Container noWrap={true}>{lorum}</Container>)
  // });
});
