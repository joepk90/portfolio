import { ContentfulClientApi, Asset, EntryCollection } from 'contentful';
import { contentfulClient } from '@src/lib/services/contentful';
import { ContentfulCollectionManager } from '@src/lib/contentful/ContentfulCollectionManager';
import { ContentfulPage, Page } from '@src/lib/contentful/ContentfulPage';
import { ContentfulProfile, Profile } from '@src/lib/contentful/ContentfulProfile';

export type IndexProps = {
    pageContent: string
    profileImage: Asset
    profileBio: string
}

type Props = {
    props: IndexProps
}

export async function getIndexStaticProps(): Promise<Props> {

    const pagesResponse: EntryCollection<Page> = await contentfulClient.getEntries({
        content_type: 'page',
        'fields.id': 'index'
    });

    const profilesResponse: EntryCollection<Profile> = await contentfulClient.getEntries({
        content_type: 'profile',
        'fields.id': '1'
    });

    const pages = new ContentfulCollectionManager(pagesResponse)
    const page = pages.getFirstEntry()
    const contentfulPage = new ContentfulPage(page);


    const profiles = new ContentfulCollectionManager(profilesResponse)
    const profile = profiles.getFirstEntry()
    const contentfulProfile = new ContentfulProfile(profile);

    return {
        props: {
            profileBio: contentfulProfile.getBio(),
            profileImage: contentfulProfile.getImage(),
            pageContent: contentfulPage.getContent(),
        }
    }
}