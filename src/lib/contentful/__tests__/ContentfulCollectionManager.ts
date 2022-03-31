import { EntryCollection } from 'contentful';
import { ContentfulCollectionManager, ContentfulCollectionManagerInterface } from '@lib/contentful/ContentfulCollectionManager';
import { contentfulClient } from '@lib/services/contentful';

jest.mock('@lib/services/contentful.ts', () => ({
    contentfulClient: {
        getEntries: jest.fn(() => ({
            sys: [],
            total: 105,
            skip: 0,
            limit: 100,
            items: [{}, {}, {}],
            includes: {},
            errors: [],
            stringifySafe: '',
            toPlainObject: ''
        }))
    }
}))

type T = {}

let pages: ContentfulCollectionManagerInterface<T>;

beforeEach(async () => {
    const pagesResponse: EntryCollection<T> = await contentfulClient.getEntries();
    pages = new ContentfulCollectionManager(pagesResponse)
})

describe('ContentfulCollectionManager class', () => {

    it('should return an array of 3 when the getItems method is called', () => {
        expect(pages.getItems().length).toEqual(3)
    });

    it('should return an entry object when the getFirstEntry method is called', () => {
        expect(pages.getFirstEntry()).toEqual({})
    });
});