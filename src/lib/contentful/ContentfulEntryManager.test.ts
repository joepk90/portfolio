import { EntryCollection, Entry } from 'contentful';
import { ContentfulCollectionManager } from '@lib/contentful/ContentfulCollectionManager';
import { contentfulClient } from '@lib/services/contentful';
import { ContentfulEntryManager } from '@src/lib/contentful/ContentfulEntryManager';

type ItemFields = {
    title: string
    content: string
}

type Item = {
    fields: ItemFields
}

const itemFields = {
    title: 'title',
    content: 'content'
}

const item = {
    fields: itemFields
}

jest.mock('@lib/services/contentful.ts', () => ({
    contentfulClient: {
        getEntries: jest.fn(() => ({
            items: [item],
        }))
    }
}))

class EntryManager extends ContentfulEntryManager<Item> { }

let entry: EntryManager;

beforeEach(async () => {
    const pagesResponse: EntryCollection<Item> = await contentfulClient.getEntries();
    const pages = new ContentfulCollectionManager(pagesResponse)
    const page = pages.getFirstEntry()
    entry = new EntryManager(page);
})

describe('Contentful Entry Manager', () => {

    it('should return an array of 3 when the getFields method is called', async () => {
        expect(entry.getFields()).toEqual(itemFields)
    });

    it('should return an entry object when the getFirstEntry method is called', async () => {
        expect(entry.getField('content')).toEqual('content')
    });
});