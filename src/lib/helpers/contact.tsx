import { ClonedElement, Email, IconWithContent, Link, Typography } from '@components/common';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

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
      url: `mailto:${email}`,
      text: email,
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
  Location = 'location',
  Email = 'email',
  Github = 'github',
  LinkedIn = 'linkedin',
}

type ContactList = {
  type: ContactListType;
  icon: IconType;
  text: string;
  url?: string;
  title?: string;
};

export const generateContactListItems = (contactData: ContactList[]): ReactNode[] => {
  const textComponent = <Typography variant="heading5" />;

  return contactData.map((contactItem, index) => {
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
      <IconWithContent key={`contact-item-${type}-${index}`} icon={<Icon fontSize={20} />}>
        {renderListItem()}
      </IconWithContent>
    );
  });
};
