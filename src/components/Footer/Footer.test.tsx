import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '@components/Footer/Footer';

const renderMockedElement = () => {
    return (
        render(<Footer />)
    )
}

describe('footer component', () => {

    it('should render the site logo', () => {
        renderMockedElement();
        expect(screen.getByTestId('site-logo')).toBeInTheDocument();
    });

    it('should render a navigation component', () => {
        renderMockedElement();
        expect(screen.getAllByRole('navigation').length).toBe(1);
    });
});