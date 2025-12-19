import { SiteLogo } from '@components/SiteLogo/SiteLogo';
import { render, screen } from '@testing-library/react';

describe('SiteLogo', () => {
  it('should render the author initials text', () => {
    render(<SiteLogo />);
    expect(screen.getByTestId('site-logo')).toBeInTheDocument();
  });

  // TODO setup style tests...
});
