import React from 'react';
import Link from 'next/link';
import { generateBEMModifiersClassList } from '@utilities/utilities';
import '@components/common/MenuItem/MenuItem.scss';

type Variant = 'dropdown' | 'light' | 'dark';

export type Props = {
    id: string,
    label: string,
    path: string
    variant?: Variant
}

const MenuItem = ({ path, label, variant }: Props) => {

    const classModifiers = variant ? [variant] : [];

    const classList = generateBEMModifiersClassList('menu-item', classModifiers)

    return (
        <li className={classList}>
            <Link href={path}>
                <a className='menu-item__link' role="menuitem">{label}</a>
            </Link>
        </li>
    )
}

export default MenuItem;