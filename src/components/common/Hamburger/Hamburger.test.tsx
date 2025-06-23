import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Hamburger from '@components/common/Hamburger/Hamburger';

const mockedOnClick = jest.fn();

const mockedHamburgerElement = () => {
  return <Hamburger onClick={mockedOnClick}></Hamburger>;
};

const getHamburgerElement = () => {
  render(mockedHamburgerElement());
  return screen.getByTestId('hamburger');
};

describe('Hamburger', () => {
  it('should render the hamburger outer element', () => {
    const hamburgerElement = getHamburgerElement();
    expect(hamburgerElement).toBeInTheDocument();
  });

  it('should render the hamburger-box element', () => {
    const hamburgerElement = getHamburgerElement();
    expect(hamburgerElement.getElementsByClassName('hamburger-box').length).toBe(1);
  });

  it('should render the hamburger-inner element', () => {
    const hamburgerElement = getHamburgerElement();
    expect(hamburgerElement.getElementsByClassName('hamburger-inner').length).toBe(1);
  });

  it('should render is-active class when clicked once', () => {
    const hamburgerElement = getHamburgerElement();
    fireEvent.click(hamburgerElement);
    expect(hamburgerElement.getAttribute('class')).toMatch(/is-active/gi);
  });

  it('should not render is-active class when clicked twice', () => {
    const hamburgerElement = getHamburgerElement();
    fireEvent.click(hamburgerElement);
    fireEvent.click(hamburgerElement);
    expect(hamburgerElement.getAttribute('class')).not.toMatch(/is-active/gi);
  });
});
