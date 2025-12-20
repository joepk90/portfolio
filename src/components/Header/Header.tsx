import '@components/Header/Header.scss';

import { DropdownNavigation, Hamburger, Navigation, Seperator, SiteBranding } from '@components';
import { indexURL, menuItems } from '@config';
import Link from 'next/link';
import { useState } from 'react';

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
              <Link href={indexURL} title="Home">
                <SiteBranding />
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
