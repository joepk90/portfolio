import { FC } from 'react';

import { getContactData, generateContactListItems } from '@src/lib/helpers';
import { ContactProps } from '@src/lib/hooks/contact';
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
  return <></>;
};
