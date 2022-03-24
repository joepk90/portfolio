import MenuItem, { Props as MenuItemProps } from '@components/common/MenuItem/MenuItem';
import '@components/common/Navigation/Navigation.scss';

export type Props = {
    menuItems: MenuItemProps[]
}

// TODO add logic to make navigation disabled (aria-hidden=true) on desktop device/in Header
const Navigation = ({ menuItems }: Props) => {

    return (
        <nav className="navigation" role="navigation">
            <ul className='navigation__menu-items'>
                {menuItems.map((menuItem: MenuItemProps) => {
                    return <MenuItem key={menuItem.id} {...menuItem} />
                })}
            </ul>
        </nav>
    );
}

export default Navigation;
