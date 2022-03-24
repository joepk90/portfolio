import MenuItem, { Props as MenuItemProps } from '@components/common/MenuItem/MenuItem';
import '@components/common/DropdownNavigation/DropdownNavigation.scss';

export type Props = {
    menuItems: MenuItemProps[]
    isOpen?: boolean
}

// TODO: review dropdown navigation:
// - animate dropdown
// - make dropdown an overlay (currently pushes content down -> CLS)
// - test dropdown open/close logic
const DropdownNavigation = ({ menuItems, isOpen = false }: Props) => {

    const isOpenClass = isOpen === true ? 'is-open' : '';

    return (
        <nav
            role="navigation"
            className={`dropdown-navigation ${isOpenClass}`}
            aria-hidden={!isOpen}
        >
            <ul className="dropdown-navigation__menu-items">
                {menuItems.map((menuItem: MenuItemProps) => {
                    return <MenuItem key={menuItem.id} {...menuItem} variant='dropdown' />
                })}
            </ul>
        </nav>
    );
}

export default DropdownNavigation;
