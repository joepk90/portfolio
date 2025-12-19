import { DropdownNavigation } from '@components';
import { render, screen } from '@testing-library/react';
import React from 'react';

const menuItems = [
  {
    id: '1',
    path: '1',
    label: '1',
  },
  {
    id: '2',
    path: '2',
    label: '2',
  },
];

const renderMockedElement = (isOpen = false) => {
  return render(<DropdownNavigation menuItems={menuItems} isOpen={isOpen} />);
};

describe('DropdownNavigation', () => {
  it('should be in the document, but set to hidden (aria-hidden)', () => {
    renderMockedElement();
    expect(screen.getByRole('navigation', { hidden: true })).toBeInTheDocument();
  });

  it('navigation element should not have the class is-open', () => {
    renderMockedElement();
    const nav = screen.getByRole('navigation', { hidden: true });
    expect(nav).not.toHaveClass('is-open');
  });

  it('navigation element should be in the document', () => {
    renderMockedElement(true);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('navigation element should have the class is-open', () => {
    renderMockedElement(true);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('is-open');
  });
});

describe('DropdownNavigation MenuItems', () => {
  it('should render multiple (2) menu items', () => {
    renderMockedElement(true);
    expect(screen.getAllByRole('menuitem').length).toBe(2);
  });

  it('should render the first menu item text content', () => {
    renderMockedElement(true);
    const link = screen.getAllByRole('menuitem')[0] as HTMLAnchorElement;
    expect(link.textContent).toContain('1');
  });

  it('should render the first menu item href attribute', () => {
    renderMockedElement(true);
    const link = screen.getAllByRole('menuitem')[0] as HTMLAnchorElement;
    expect(link.href).toContain('/1');
  });

  it('should render the second menu item text content', () => {
    renderMockedElement(true);
    const link = screen.getAllByRole('menuitem')[1] as HTMLAnchorElement;
    expect(link.textContent).toContain('2');
  });

  it('should render the second menu item href attribute', () => {
    renderMockedElement(true);
    const link = screen.getAllByRole('menuitem')[1] as HTMLAnchorElement;
    expect(link.href).toContain('/2');
  });
});
