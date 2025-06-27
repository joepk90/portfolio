import Navigation from '@src/components/common/Navigation/Navigation';
import { Section } from '@components/common';
import Container from '@src/components/common/Container/Container';
import SiteTitle from '@components/SiteTitle/SiteTitle';
import { menuItems, siteDescription } from '@src/config';
import '@components/Footer/Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <Section margin="lg">
        <Container>
          <div className="footer__row">
            <div className="footer__column">
              <p>
                <SiteTitle variant="light" />
              </p>
              <p className="footer__content">{siteDescription}</p>
            </div>

            <div className="footer__column">
              <h4 className="footer__title">Site Map</h4>
              <div className="footer__content">
                <Navigation menuItems={menuItems} variant="light" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section marginBottom="sm">
        <Container>
          <div className="footer__copyright" data-testid="footer-copyright">
            @ Joe Park-Kennaby 2022
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
