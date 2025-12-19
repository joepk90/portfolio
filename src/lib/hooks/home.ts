import {
  contentfulClient,
  ContentfulCollectionManager,
  ContentfulPage,
  ContentfulProfile,
  Page,
  Profile,
} from '@lib';
import { Asset, EntryCollection } from 'contentful';
import { GetStaticPropsResult } from 'next';

export type HomePageProps = {
  pageContent: string;
  profileImage: Asset;
  profileBio: string;
};

export async function getHomePageStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const pagesResponse: EntryCollection<Page> = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.id': 'index',
  });

  const profilesResponse: EntryCollection<Profile> = await contentfulClient.getEntries({
    content_type: 'profile',
    'fields.id': '1',
  });

  const pages = new ContentfulCollectionManager(pagesResponse);
  const page = pages.getFirstEntry();
  const contentfulPage = new ContentfulPage(page);

  const profiles = new ContentfulCollectionManager(profilesResponse);
  const profile = profiles.getFirstEntry();
  const contentfulProfile = new ContentfulProfile(profile);

  return {
    props: {
      profileBio: contentfulProfile.getBio(),
      profileImage: contentfulProfile.getImage(),
      pageContent: contentfulPage.getContent(),
    },
    revalidate: 300, // 5 minutes
  };
}
