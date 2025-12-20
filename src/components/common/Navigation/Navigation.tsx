import '@components/common/Navigation/Navigation.scss';

import { MenuItem, MenuItemProps } from '@components';

type Variant = 'dark' | 'light';

export type NavigationProps = {
  menuItems: MenuItemProps[];
  variant?: Variant;
};

// TODO add logic to make navigation disabled (aria-hidden=true) on desktop device/in Header
export const Navigation = ({ menuItems, variant = 'dark' }: NavigationProps) => {
  return (
    <nav className="navigation" role="navigation">
      <ul className="navigation__menu-items">
        {menuItems.map((menuItem: MenuItemProps) => {
          return <MenuItem key={menuItem.id} {...menuItem} variant={variant} />;
        })}
      </ul>
    </nav>
  );
};
