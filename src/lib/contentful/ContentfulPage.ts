import { ContentfulEntryManager } from '@src/lib/contentful/ContentfulEntryManager';

export interface ContentfulPageInterface {
  getId(): string;
  getTitle(): string;
  getContent(): string;
}

export type Page = {
  id: string;
  title: string;
  content: string;
};

export class ContentfulPage
  extends ContentfulEntryManager<Page>
  implements ContentfulPageInterface
{
  getId = (): string => {
    return this.getField('id');
  };

  getTitle = (): string => {
    return this.getField('title');
  };

  getContent = (): string => {
    return this.getField('content');
  };
}
