import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const removeHttpeProtocol = (url: string) => url.replace('https://', '');

type ContactData = {
  location: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
};

export enum ContactListType {
  Location = 'location',
  Email = 'email',
  Github = 'github',
  LinkedIn = 'linkedin',
}

export type ContactList = {
  type: ContactListType;
  icon: IconType;
  text: string;
  url?: string;
  title?: string;
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
