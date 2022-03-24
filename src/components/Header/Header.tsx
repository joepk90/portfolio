import { useState, ReactElement } from 'react';
import Navigation from '@src/components/common/Navigation/Navigation'
import DropdownNavigation from '@src/components/common/DropdownNavigation/DropdownNavigation'
import Hamburger from '@components/common/Hamburger/Hamburger';
import SiteBranding from '@src/components/SiteBranding/SiteBranding';
import { menuItems } from '@src/config';
import '@components/Header/Header.scss'

const Header = () => {

    const [isNavOpen, setNavIsOpen] = useState(false);

    const handleHamburgerClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setNavIsOpen(!isNavOpen)
    };

    return (
        <header className="header">

            <div className="header__container">
                <div className="header__section">
                    <div className="header__details">
                        <div className="header__branding">
                            <SiteBranding />
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

        </header>
    )
}

export default Header;