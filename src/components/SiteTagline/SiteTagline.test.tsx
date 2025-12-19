import { SiteTagline } from '@components/SiteTagline/SiteTagline';
import { render, screen } from '@testing-library/react';

describe('SiteTagline', () => {
  it('should render the site tag line text', () => {
    render(<SiteTagline />);
    expect(screen.getByTestId('site-tagline')).toBeInTheDocument();
  });
});
