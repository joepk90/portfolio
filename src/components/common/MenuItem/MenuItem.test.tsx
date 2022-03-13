import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hamburger from '@components/common/Hamburger/Hamburger';

const mockedOnClick = jest.fn();

const mockedHamburgerElement = () => {
    return (
        <Hamburger onClick={mockedOnClick}></Hamburger>
    )
}

const getHamburgerElement = () => {
    render(mockedHamburgerElement());
    return screen.getByTestId('hamburger')
}

describe("MenuItem", () => {

    it('should render the hamburger outer element', () => {
        const hamburgerElement = getHamburgerElement();
        expect(hamburgerElement).toBeInTheDocument();
    });

});
