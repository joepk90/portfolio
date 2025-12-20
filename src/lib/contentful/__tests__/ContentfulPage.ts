import { ContentfulCollectionManager } from '@lib/contentful/ContentfulCollectionManager';
import { ContentfulPage, ContentfulPageInterface, Page } from '@lib/contentful/ContentfulPage';
import { contentfulClient } from '@lib/services/contentful';
import { Entry, EntryCollection } from 'contentful';

type Item = {
  fields: Page;
};

const itemFields: Page = {
  id: 'id',
  title: 'title',
  content: 'content',
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

let pageEntry: ContentfulPageInterface;

beforeEach(async () => {
  const pagesResponse: EntryCollection<Page> = await contentfulClient.getEntries();
  const pages = new ContentfulCollectionManager(pagesResponse);
  const pageTest: Entry<Page> = pages.getFirstEntry();
  pageEntry = new ContentfulPage(pageTest);
});

describe('ContentfulPage class', () => {
  it('should return the id property when getId method is called', () => {
    expect(pageEntry.getId()).toEqual(itemFields.id);
  });

  it('should return the title property when getTitle method is called', () => {
    expect(pageEntry.getTitle()).toEqual(itemFields.title);
  });

  it('should return the content property when getContent method is called', () => {
    expect(pageEntry.getContent()).toEqual(itemFields.content);
  });
});
