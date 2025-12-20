import '@components/common/DropdownNavigation/DropdownNavigation.scss';

import { MenuItem, MenuItemProps } from '@components';

export type DropdownNavigationProps = {
  menuItems: MenuItemProps[];
  isOpen?: boolean;
};

// TODO: review dropdown navigation:
// - animate dropdown
// - make dropdown an overlay (currently pushes content down -> CLS)
// - test dropdown open/close logic
export const DropdownNavigation = ({ menuItems, isOpen = false }: DropdownNavigationProps) => {
  const isOpenClass = isOpen === true ? 'is-open' : '';

  return (
    <nav role="navigation" className={`dropdown-navigation ${isOpenClass}`} aria-hidden={!isOpen}>
      <ul className="dropdown-navigation__menu-items">
        {menuItems.map((menuItem: MenuItemProps) => {
          return <MenuItem key={menuItem.id} {...menuItem} variant="dropdown" />;
        })}
      </ul>
    </nav>
  );
};
