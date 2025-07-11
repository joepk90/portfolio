import { ReactNode } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconWithContent, Link, Typography, Email, ClonedElement } from '@src/components/common';
import { IconType } from 'react-icons';

const removeHttpeProtocol = (url: string) => url.replace('https://', '');

type ContactData = {
  location: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
};

export const getContactData = ({ location, email, githubLink, linkedInLink }: ContactData) => {
  return [
    { type: ContactListType.Location, icon: FaMapMarkerAlt, text: `Based in ${location}` },
    {
      type: ContactListType.Email,
      icon: FaEnvelope,
      title: 'Send me an email',
      url: `mailto:${email}`, // TODO obfiscate
      text: email, // TODO obfiscate
    },
    {
      type: ContactListType.Github,
      icon: FaGithub,
      title: 'Follow me on GitHub',
      url: githubLink,
      text: removeHttpeProtocol(githubLink),
    },
    {
      type: ContactListType.LinkedIn,
      icon: FaLinkedin,
      title: 'Connect with me on LinkedIn',
      url: linkedInLink,
      text: removeHttpeProtocol(linkedInLink),
    },
  ];
};

enum ContactListType {
  Location = 'email',
  Email = 'email',
  Github = 'github',
  LinkedIn = 'email',
}

type ContactList = {
  type: ContactListType;
  icon: IconType;
  text: string;
  url?: string;
  title?: string;
};

const textComponent = <Typography variant="heading5" />;

export const generateContactListItems = (contactData: ContactList[]): ReactNode[] => {
  return contactData.map((contactItem) => {
    const { icon: Icon, title, url, text, type } = contactItem;

    const renderListItem = () => {
      if (!url || !title) {
        return <ClonedElement element={textComponent}>{text}</ClonedElement>;
      }

      if (type === ContactListType.Email) {
        return <Email href={url} text={text} title={title} childComponent={textComponent} />;
      }

      return (
        <Link href={url} title={title} target="_blank">
          <ClonedElement element={textComponent}>{text}</ClonedElement>
        </Link>
      );
    };

    return (
      <IconWithContent key={contactItem.type} icon={<Icon fontSize={20} />}>
        {renderListItem()}
      </IconWithContent>
    );
  });
};
