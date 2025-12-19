import { ContentfulCollectionManager } from '@lib/contentful/ContentfulCollectionManager';
import { contentfulClient } from '@lib/services/contentful';
import { ContentfulEntryManager } from '@src/lib/contentful/ContentfulEntryManager';
import { EntryCollection, Metadata, TagLink } from 'contentful';

type ItemFields = {
  title: string;
  content: string;
};

type Item = {
  fields: ItemFields;
  metadata: Metadata;
};

const itemFields: ItemFields = {
  title: 'title',
  content: 'content',
};

const tagLink: TagLink = {
  sys: {
    type: 'Link',
    linkType: 'Tag',
    id: 'tag',
  },
};

const metadata: Metadata = {
  tags: [tagLink, tagLink],
};

const item: Item = {
  fields: itemFields,
  metadata: metadata,
};

jest.mock('@lib/services/contentful.ts', () => ({
  contentfulClient: {
    getEntries: jest.fn(() => ({
      items: [item],
    })),
  },
}));

class EntryManager extends ContentfulEntryManager<Item> {}

let entry: EntryManager;

beforeEach(async () => {
  const pagesResponse: EntryCollection<Item> = await contentfulClient.getEntries();
  const pages = new ContentfulCollectionManager(pagesResponse);
  const page = pages.getFirstEntry();
  entry = new EntryManager(page);
});

describe('Contentful Entry Manager', () => {
  it('should return an array of 3 when the getFields method is called', async () => {
    expect(entry.getFields()).toEqual(itemFields);
  });

  it('should return the value of the field when the getField method is called', async () => {
    expect(entry.getField('content')).toEqual('content');
  });

  it('should return the metadata object when the getMetadata method is called', async () => {
    expect(entry.getMetadata()).toEqual(item.metadata);
  });

  it('should return the value of the tagLinks array when the getTagLinks method is called', async () => {
    expect(entry.getTagLinks()).toEqual(item.metadata.tags);
  });

  it('should return the value of the tags array when the getTags method is called', async () => {
    expect(entry.getTags().length).toBe(2);
  });
});
