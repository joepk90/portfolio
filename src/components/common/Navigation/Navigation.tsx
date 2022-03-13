import Link from 'next/link';
import MenuItem, { Props as MenuItemProps } from '@components/common/MenuItem/MenuItem';
import '@components/common/Navigation/Navigation.scss';

export type Props = {
    menuItems: MenuItemProps[]
}

const Navigation = ({ menuItems }: Props) => {

    return (
        <nav className="navigation">
            <ul className='navigation__menu-items'>
                {menuItems.map((menuItem: MenuItemProps) => <MenuItem {...menuItem} />)}
            </ul>
        </nav>
    );
}

export default Navigation;
