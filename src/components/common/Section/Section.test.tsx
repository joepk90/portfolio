import { Section } from '@components';
import { render, screen } from '@testing-library/react';

const lorum = `Lorem ipsum dolor`;

describe('section component', () => {
  it('should render children', () => {
    render(<Section>{lorum}</Section>);
    expect(screen.getByText('Lorem ipsum dolor')).toBeInTheDocument();
  });

  it('should render the passed in class name', () => {
    const { container } = render(<Section className="test-class">{lorum}</Section>);
    expect(container.getElementsByClassName('test-class').length).toBe(1);
  });

  // TODO test css properties?

  // it('should have a top and bottom padding of 25px', () => {
  // const lorum = `Lorem ipsum dolor`
  // render(<Container padding='sm'>{lorum}</Container>)
  // });

  // it('should have a top and bottom margin of 25px', () => {
  // const lorum = `Lorem ipsum dolor`
  // render(<Container margin='sm'>{lorum}</Container>)
  // });
});
