import { ReactNode } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconWithContent, Link, Typography } from '@src/components/common';
import { IconType } from 'react-icons';
import { obfuscatedEmailHTML } from '@lib/utilities';

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
    const { icon: Icon, title, url, text, type } = contactItem;

    const isEmail = type === 'email';

    let textComponent: ReactNode;
    if (isEmail) {
      textComponent = <Typography variant="heading5" dangerouslySetInnerHTML={{ __html: text }} />;
    } else {
      textComponent = <Typography variant="heading5" children={text} />;
    }

    const renderListItem = () => {
      if (!url || !title) {
        return textComponent;
      }

      return (
        <Link href={isEmail ? obfuscatedEmailHTML(url) : url} title={title} target="_blank">
          {textComponent}
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
