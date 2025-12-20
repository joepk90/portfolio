import '@components/Footer/Footer.scss';

import { Container, Navigation, Section, SiteTitle } from '@components';
import { menuItems, siteDescription } from '@config';
import { ThemeVariant } from '@lib';

export const Footer = () => {
  return (
    <footer className="footer">
      <Section margin="lg">
        <Container>
          <div className="footer__row">
            <div className="footer__column">
              <p>
                <SiteTitle variant={ThemeVariant.Light} />
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
