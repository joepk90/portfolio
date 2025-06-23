import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@components/Header/Header';

const renderMockedElement = () => {
  return render(<Header />);
};

describe('header component', () => {
  it('should render the site title', () => {
    renderMockedElement();
    expect(screen.getByTestId('site-title')).toBeInTheDocument();
  });

  it('should render the site logo', () => {
    renderMockedElement();
    expect(screen.getByTestId('site-logo')).toBeInTheDocument();
  });

  it('should render the one or more navigation components', () => {
    renderMockedElement();
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1);
  });

  it('should render the hamburger component', () => {
    renderMockedElement();
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });

  it('should open the dropdown navigation componenet when the hamburger is clicked once', () => {
    renderMockedElement();
    const hamburger = screen.getByTestId('hamburger');
    fireEvent.click(hamburger);
    expect(screen.getAllByRole('navigation').length).toBe(2);
  });

  it('should close the dropdown navigation component when the hamburger is clicked twice', () => {
    renderMockedElement();
    const hamburger = screen.getByTestId('hamburger');
    fireEvent.click(hamburger);
    fireEvent.click(hamburger);
    expect(screen.getAllByRole('navigation').length).toBe(1);
  });
});
