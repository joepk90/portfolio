import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@src/components/common/Button/Button'; // TODO setup aliases in storybook..

const buttonText = `Button Text`

const renderMockedElement = (atts = {}) => {
    return render(<Button {...atts}>{buttonText}</Button>)
}

describe("Button component", () => {

    it('should render the button text', () => {
        renderMockedElement();
        expect(screen.getByText(buttonText)).toBeInTheDocument();
    });

    it('should render the button element', () => {
        renderMockedElement();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render the buttons custom attributes', () => {
        renderMockedElement({ 'aria-pressed': true });
        expect(screen.getByRole('button')).toHaveAttribute('aria-pressed');
    });

});