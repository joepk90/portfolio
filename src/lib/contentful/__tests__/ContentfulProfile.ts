import { ContentfulCollectionManager } from '@lib/contentful/ContentfulCollectionManager';
import {
  ContentfulProfile,
  ContentfulProfileInterface,
  Profile,
} from '@lib/contentful/ContentfulProfile';
import { contentfulClient } from '@lib/services/contentful';
import { Entry, EntryCollection } from 'contentful';

type Item = {
  fields: ProfileFields;
};

// exclude image from test
type ProfileFields = Omit<Profile, 'image'>;
const itemFields: ProfileFields = {
  id: 1,
  name: 'name',
  bio: 'bio',
  cvLink: '',
  email: '',
  githubLink: '',
  linkedInLink: '',
  location: '',
};

const item: Item = {
  fields: itemFields,
};

jest.mock('@lib/services/contentful', () => ({
  contentfulClient: {
    getEntries: jest.fn(() => ({
      items: [item],
    })),
  },
}));

let profileEntry: ContentfulProfileInterface;

beforeEach(async () => {
  const profilesResponse: EntryCollection<Profile> = await contentfulClient.getEntries();
  const profiles = new ContentfulCollectionManager(profilesResponse);
  const profile: Entry<Profile> = profiles.getFirstEntry();
  profileEntry = new ContentfulProfile(profile);
});

describe('ContentfulProfile class', () => {
  it('should return id property when getId method is called', async () => {
    expect(profileEntry.getId()).toEqual(itemFields.id);
  });

  it('should return name property when getBio method is called', async () => {
    expect(profileEntry.getName()).toEqual(itemFields.name);
  });

  it('should return bio property when getBio method is called', async () => {
    expect(profileEntry.getBio()).toEqual(itemFields.bio);
  });
});
