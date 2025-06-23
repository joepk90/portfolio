import Link from 'next/link';
import { useState, ReactElement } from 'react';
import Navigation from '@src/components/common/Navigation/Navigation';
import DropdownNavigation from '@src/components/common/DropdownNavigation/DropdownNavigation';
import { Hamburger } from '@components/common/Hamburger/Hamburger';
import Seperator from '@components/common/Seperator/Seperator';
import { SiteBranding } from '@src/components/SiteBranding/SiteBranding';
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
