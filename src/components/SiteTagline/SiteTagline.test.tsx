import { SiteTagline } from '@components';
import { render, screen } from '@testing-library/react';

describe('SiteTagline', () => {
  it('should render the site tag line text', () => {
    render(<SiteTagline />);
    expect(screen.getByTestId('site-tagline')).toBeInTheDocument();
  });
});
