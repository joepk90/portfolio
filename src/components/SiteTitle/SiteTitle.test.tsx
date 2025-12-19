import { SiteTitle } from '@components/SiteTitle/SiteTitle';
import { render, screen } from '@testing-library/react';

describe('SiteTitle', () => {
  it('should render the site author text', () => {
    render(<SiteTitle />);
    expect(screen.getByTestId('site-title')).toBeInTheDocument();
  });

  // TODO setup style tests...
});
