import { render, screen } from '@testing-library/react';
import Heading, { HeadingLevels } from '@components/common/Heading/Heading';

const headingText = 'The Title'

const renderMockedComponent = (level: HeadingLevels = 1) => {
    return render(<Heading level={level}>{headingText}</Heading>)
}

describe("heading component", () => {
    it('should render the provided text', () => {
        renderMockedComponent()
        expect(screen.getByText(headingText)).toBeInTheDocument();
    });

    it('should render an h tag with the specified level', () => {
        const level: HeadingLevels = 2;
        renderMockedComponent(level)
        expect(screen.getByRole('heading', { level })).toBeInTheDocument();
    });
});