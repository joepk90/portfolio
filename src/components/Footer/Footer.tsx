import Navigation from '@src/components/common/Navigation/Navigation'
import SiteLogo from '@src/components/SiteLogo/SiteLogo';
import { menuItems } from '@src/config';
import '@components/Footer/Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <Navigation menuItems={menuItems} />
                    <SiteLogo />
                </div>
            </div>
        </footer>
    )
}

export default Footer;