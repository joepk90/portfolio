import { Navigation } from '@components';
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

const renderMockedElement = () => {
  return render(<Navigation menuItems={menuItems} />);
};

describe('Navigation', () => {
  it('component should be in the document', () => {
    renderMockedElement();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render the first menu item text content', () => {
    renderMockedElement();
    const link = screen.getAllByRole('menuitem')[0] as HTMLAnchorElement;
    expect(link.textContent).toContain('1');
  });

  it('should render the first menu item href attribute', () => {
    renderMockedElement();
    const link = screen.getAllByRole('menuitem')[0] as HTMLAnchorElement;
    expect(link.href).toContain('/1');
  });

  it('should render the second menu item text content', () => {
    renderMockedElement();
    const link = screen.getAllByRole('menuitem')[1] as HTMLAnchorElement;
    expect(link.textContent).toContain('2');
  });

  it('should render the second menu item href attribute', () => {
    renderMockedElement();
    const link = screen.getAllByRole('menuitem')[1] as HTMLAnchorElement;
    expect(link.href).toContain('/2');
  });

  // TODO test component styles (variants)
});
