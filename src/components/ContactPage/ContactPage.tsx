import { FC } from 'react';
import Container from '@src/components/common/Container/Container';
import { SectionWithSeperator } from '@components/common';
import { ThemeVariant } from '@lib/utilities/utilities';
import { getContactData, generateContactListItems } from '@src/lib/helpers';
import { ContactProps } from '@src/lib/hooks/contact';
import { LetsConnect } from '@src/components/ContactPage/components/LetsConnect';
import { ViewCV } from '@src/components/ContactPage/components/ViewCV';
import '@components/ContactPage/ContactPage.scss';

export const ContactPage: FC<ContactProps> = ({
  location,
  email,
  githubLink,
  linkedInLink,
  cvLink,
}) => {
  const contactData = getContactData({ location, email, githubLink, linkedInLink });
  const contactListItems = generateContactListItems(contactData);
  return (
    <>
      <SectionWithSeperator padding="lg" variant={ThemeVariant.Light}>
        <Container>
          <LetsConnect contactListItems={contactListItems} />
        </Container>
      </SectionWithSeperator>
      <SectionWithSeperator padding="lg" variant={ThemeVariant.Dark} disableDivider>
        <Container>
          <ViewCV cvLink={cvLink} />
        </Container>
      </SectionWithSeperator>
    </>
  );
};
