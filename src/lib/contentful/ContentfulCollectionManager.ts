import { EntryCollection, Entry } from 'contentful';

export interface ContentfulCollectionManagerInterface<Fields> {
  collection: EntryCollection<Fields>;
  getItems(): Array<Entry<Fields>>;
  getFirstEntry(): Entry<Fields>;
}

export class ContentfulCollectionManager<Fields>
  implements ContentfulCollectionManagerInterface<Fields>
{
  collection: EntryCollection<Fields>;

  constructor(collection: EntryCollection<Fields>) {
    this.collection = collection;
  }

  getItems = () => {
    return this.collection.items;
  };

  getFirstEntry = () => {
    const items = this.getItems();
    return items[0];
  };

  // findEntry(key, value) = () => {}
}
