import { render, screen, fireEvent } from '@testing-library/react';
import { menuItems, siteDescription } from '@src/config';
import Footer from '@components/Footer/Footer';

const renderMockedElement = () => {
  return render(<Footer />);
};

describe('footer component', () => {
  it('should render the site title', () => {
    renderMockedElement();
    expect(screen.getByTestId('site-title')).toBeInTheDocument();
  });

  it('should render a navigation component', () => {
    renderMockedElement();
    expect(screen.getAllByRole('navigation').length).toBe(1);
  });

  it('should render the site description', () => {
    renderMockedElement();
    expect(screen.getByText(siteDescription)).toBeInTheDocument();
  });

  it('should render the footer copyright element', () => {
    renderMockedElement();
    expect(screen.getByTestId('footer-copyright')).toBeInTheDocument();
  });
});
