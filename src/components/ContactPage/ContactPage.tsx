import '@components/ContactPage/ContactPage.scss';

import { Container, SectionWithSeperator } from '@components';
import { LetsConnect, ViewCV } from '@components/ContactPage/components';
import { generateContactListItems } from '@components/ContactPage/utils';
import { ContactProps, ThemeVariant, getContactData } from '@lib';
import { FC } from 'react';

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
