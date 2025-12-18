import Link from 'next/link';
import { useState } from 'react';

import { DropdownNavigation, Hamburger, Navigation, Seperator } from '@components/common';
import { SiteBranding } from '@components/SiteBranding';
import { menuItems, indexURL } from '@src/config';
import '@components/Header/Header.scss';

export const Header = () => {
  const [isNavOpen, setNavIsOpen] = useState(false);

  const handleHamburgerClick = (): void => {
    setNavIsOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__section">
          <div className="header__details">
            <div className="header__branding">
              <Link href={indexURL}>
                <a title="Home">
                  <SiteBranding />
                </a>
              </Link>
            </div>
            <div className="header__navigation-desktop">
              <Navigation menuItems={menuItems} />
            </div>
            <div className="header__navigation-toggle">
              <Hamburger onClick={handleHamburgerClick} />
            </div>
          </div>
        </div>
      </div>

      <div className={'header__navigation-mobile'}>
        <DropdownNavigation menuItems={menuItems} isOpen={isNavOpen} />
      </div>

      <Seperator />
    </header>
  );
};
