import React from 'react';
import Link from 'next/link';
import '@components/common/MenuItem/MenuItem.scss';

type Variant = 'dropdown';

export type Props = {
    name: string,
    label: string,
    path: string
    variant?: Variant
}

const MenuItem = ({ path, label, name, variant }: Props) => {
    return (
        <li key={name} className={`menu-item menu-item--${variant}`}>
            <Link href={path}>
                <a className='menu-item__link'>{label}</a>
            </Link>
        </li>
    )
}

export default MenuItem;