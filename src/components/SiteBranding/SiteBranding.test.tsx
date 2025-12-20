import { SiteBranding } from '@components';
import { render } from '@testing-library/react';

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
