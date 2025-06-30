import { GetStaticPropsResult } from 'next';
import { EntryCollection } from 'contentful';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';
import { ContentfulProfile, Profile } from '@src/lib/contentful/ContentfulProfile';

export type ContactProps = {
  location: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
  cvLink: string;
};

export async function getContactStaticProps(): Promise<GetStaticPropsResult<ContactProps>> {
  const profilesResponse: EntryCollection<Profile> = await contentfulClient.getEntries({
    content_type: 'profile',
    'fields.id': '1',
  });

  const profiles = new ContentfulCollectionManager(profilesResponse);
  const profile = profiles.getFirstEntry();
  const contentfulProfile = new ContentfulProfile(profile);

  return {
    props: {
      location: contentfulProfile.getLocation(),
      email: contentfulProfile.getEmail(),
      githubLink: contentfulProfile.getGithubLink(),
      linkedInLink: contentfulProfile.getLinkedInLink(),
      cvLink: contentfulProfile.getCVLink(),
    },
    revalidate: 300, // 5 minutes
  };
}
