import { render, screen } from '@testing-library/react';
import SiteBranding from '@components/SiteBranding/SiteBranding';

describe('SiteBranding', () => {
  it('should render the site title text', () => {
    const element = render(<SiteBranding />);
    expect(element.getByTestId('site-title')).toBeInTheDocument();
  });

  it('should render the author initials text', () => {
    const element = render(<SiteBranding />);
    expect(element.getByTestId('site-logo')).toBeInTheDocument();
  });

  // it('should render the site tagline text', () => {
  //     const element = render(<SiteBranding />)
  //     expect(element.getByTestId('site-tagline')).toBeInTheDocument();
  // });
});
