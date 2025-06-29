import { ReactNode } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GetStaticPropsResult } from 'next';
import { Asset, EntryCollection } from 'contentful';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';
import { ContentfulProfile, Profile } from '@src/lib/contentful/ContentfulProfile';
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
    { type: 'location', icon: FaMapMarkerAlt, text: `'Based in ${location}` },
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

export type ContactProps = {
  location: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
  cvLink: string;
  cvPdf: Asset;
};

export async function getContactStaticProps(): Promise<GetStaticPropsResult<ContactProps>> {
  const profilesResponse: EntryCollection<Profile> = await contentfulClient.getEntries({
    content_type: 'profile',
    'fields.id': '1',
  });

  const profiles = new ContentfulCollectionManager(profilesResponse);
  const profile = profiles.getFirstEntry();
  const contentfulProfile = new ContentfulProfile(profile);

  console.log('contentfulProfile');
  console.log(contentfulProfile);

  return {
    props: {
      location: contentfulProfile.getLocation(),
      email: contentfulProfile.getEmail(),
      githubLink: contentfulProfile.getGithubLink(),
      linkedInLink: contentfulProfile.getLinkedInLink(),
      cvLink: contentfulProfile.getCVLink(),
      cvPdf: contentfulProfile.getCVPdf(),
    },
    revalidate: 300, // 5 minutes
  };
}
