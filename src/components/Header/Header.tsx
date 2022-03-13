import { useState, ReactElement } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Navigation from '@src/components/common/Navigation/Navigation'
import DropDownNavigation from '@src/components/common/DropDownNavigation/DropDownNavigation'
import Hamburger from '@components/common/Hamburger/Hamburger';
import { siteAuthor } from '@src/config';
import { menuItems } from '@src/config'
import '@components/Header/Header.scss'
import variables from '@styles/base/_variables-breakpoints.module.scss';

// size at which the desktop navigation is shown
const breakPointNavigationSize = parseInt(variables.breakPointNavigationSize);

const Header = () => {

    const [isNavOpen, setNavIsOpen] = useState(false);

    const showDesktopNavigation = useMediaQuery({
        query: `(min-width:${breakPointNavigationSize}px)`
    });

    const handleHamburgerClick = () => setNavIsOpen(!isNavOpen)

    const renderNavigationOrHamburger = (): ReactElement => {

        if (showDesktopNavigation === true) return <Navigation menuItems={menuItems} />

        return <Hamburger onClick={handleHamburgerClick} />

    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__section">
                    <div className="header__details">
                        <span className="header__branding">{siteAuthor}</span>
                        {renderNavigationOrHamburger()}
                    </div>
                </div>
            </div>

            <MediaQuery maxWidth={breakPointNavigationSize - 1}>
                <div className={'header__navigation'}>
                    <DropDownNavigation menuItems={menuItems} isOpen={isNavOpen} />
                </div>
            </MediaQuery>

        </header>
    )
}

export default Header;

