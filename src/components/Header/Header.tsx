import Link from 'next/link';
import { useState, ReactElement } from 'react';
import Navigation from '@src/components/common/Navigation/Navigation'
import DropdownNavigation from '@src/components/common/DropdownNavigation/DropdownNavigation'
import Hamburger from '@components/common/Hamburger/Hamburger';
import Seperator from '@components/common/Seperator/Seperator';
import SiteBranding from '@src/components/SiteBranding/SiteBranding';
import { toggleTheme, ThemeState } from '@store/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { menuItems, indexURL } from '@src/config';
import '@components/Header/Header.scss'


const Header = () => {

    const dispatch = useDispatch();
    const darkThemeEnabled = useSelector((state: ThemeState) => state.darkThemeEnabled)

    const [isNavOpen, setNavIsOpen] = useState(false);

    const handleHamburgerClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setNavIsOpen(!isNavOpen)
    };

    return (
        <header className="header">

            <input
                type="checkbox"
                id="scales"
                name="scales"
                checked={darkThemeEnabled}
                onChange={() => dispatch(toggleTheme())}
            />

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
    )
}

export default Header;