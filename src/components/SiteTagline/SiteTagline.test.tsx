import { render, screen } from '@testing-library/react';
import SiteTagline from '@components/SiteTagline/SiteTagline';

describe("SiteTagline", () => {
    it('should render the site tag line text', () => {
        render(<SiteTagline />)
        expect(screen.getByTestId('site-tagline')).toBeInTheDocument();
    });
});

