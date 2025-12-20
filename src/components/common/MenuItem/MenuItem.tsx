import '@components/common/MenuItem/MenuItem.scss';

import { generateBEMModifiersClassList } from '@lib';
import Link from 'next/link';
import React from 'react';

type Variant = 'dropdown' | 'light' | 'dark';

export type MenuItemProps = {
  id: string;
  label: string;
  path: string;
  variant?: Variant;
};

export const MenuItem = ({ path, label, variant }: MenuItemProps) => {
  const classModifiers = variant ? [variant] : [];

  const classList = generateBEMModifiersClassList('menu-item', classModifiers);

  return (
    <li className={classList}>
      <Link href={path} className="menu-item__link" role="menuitem">
        {label}
      </Link>
    </li>
  );
};
