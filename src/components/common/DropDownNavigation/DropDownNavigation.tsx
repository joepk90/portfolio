import Link from 'next/link';
import MenuItem from '@components/common/MenuItem/MenuItem';
import '@components/common/DropDownNavigation/DropDownNavigation.scss';

type MenuItem = {
    name: string,
    label: string,
    path: string
}

export type Props = {
    menuItems: MenuItem[]
    isOpen: boolean
}

const DropDownNavigation = ({ menuItems, isOpen }: Props) => {

    const renderClassList = (): string => {

        let classList = "dropdown-navigation__menu-items";

        if (isOpen === true) {
            classList = classList + " is-open";
        }

        return classList;
    }

    return (
        <nav className="dropdown-navigation">
            <ul className={renderClassList()}>
                {menuItems.map((menuItem: MenuItem) => <MenuItem {...menuItem} variant='dropdown' />)}
            </ul>
        </nav>
    );
}

export default DropDownNavigation;
