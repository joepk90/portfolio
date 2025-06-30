import { ReactNode } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconWithContent, Link, Typography } from '@src/components/common';
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
    { type: 'location', icon: FaMapMarkerAlt, text: `Based in ${location}` },
    {
      type: 'email',
      icon: FaEnvelope,
      title: 'Send me an email',
      url: `mailto:${email}`, // TODO obfiscate
      text: email, // TODO obfiscate
    },
    {
      type: 'github',
      icon: FaGithub,
      title: 'Follow me on GitHub',
      url: githubLink,
      text: removeHttpeProtocol(githubLink),
    },
    {
      type: 'linkedin',
      icon: FaLinkedin,
      title: 'Connect with me on LinkedIn',
      url: linkedInLink,
      text: removeHttpeProtocol(linkedInLink),
    },
  ];
};

type ContactList = {
  type: string;
  icon: IconType;
  text: string;
  url?: string;
  title?: string;
};

export const generateContactListItems = (contactData: ContactList[]): ReactNode[] => {
  return contactData.map((contactItem) => {
    const { icon: Icon, title, url, text } = contactItem;

    return (
      <IconWithContent key={contactItem.type} icon={<Icon fontSize={20} />}>
        {url && title ? (
          <Link href={url} title={title} target="_blank">
            <Typography variant="heading5">{text}</Typography>
          </Link>
        ) : (
          <Typography variant="heading5">{text}</Typography>
        )}
      </IconWithContent>
    );
  });
};
