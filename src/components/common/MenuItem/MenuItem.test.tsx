import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from '@components/common/MenuItem/MenuItem';

const path = '/';
const label = 'Menu Item';

const mockedMenuItemElement = () => {
  return <MenuItem path={path} label={label} id={path}></MenuItem>;
};

const getMockedElement = () => {
  render(mockedMenuItemElement());
  return screen.getByRole('menuitem');
};

describe('MenuItem', () => {
  it('should render the wrapper element', () => {
    const element = getMockedElement();
    expect(element).toBeInTheDocument();
  });

  it('should render the provided text', () => {
    const element = getMockedElement();
    expect(element.textContent).toContain(label);
  });

  it('should render a link (a) element with an href of the provided path', () => {
    const element = getMockedElement();
    expect(element.getAttribute('href')).toBe(path);
  });
});
