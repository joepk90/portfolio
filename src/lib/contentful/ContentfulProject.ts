import { Document } from '@contentful/rich-text-types';
import { Asset, Entry } from 'contentful';
import { ContentfulEntryManager } from './ContentfulEntryManager';
import { ContentfulLink } from './ContentfulLink';

export type ProjectProps = {
  date: string;
  description: Document | string;
  summary: string;
  repositories: string[];
  slug: string;
  title: string;
  type: string;
  url: string;
  tags: string[];
  image: Asset | null;
  repositoryLinks: ContentfulLink[];
};

export interface ContentfulProjectInterface {
  getDate(): string;
  getSummary(): string;
  getDescription(): Document | string;
  getRepositories(): string[];
  getSlug(): string;
  getTitle(): string;
  getType(): string;
  getUrl(): string;
  getRepositoryLinks(): ContentfulLink[];
}

export class ContentfulProject
  extends ContentfulEntryManager<ProjectProps>
  implements ContentfulProjectInterface
{
  getDate = (): string => {
    const date: string = this.getField('date');

    if (!date || typeof date !== 'string') return '';

    const dateObject: Date = new Date(date);
    const month: string = dateObject.toLocaleString('default', { month: 'long' });
    const year: string = dateObject.getFullYear().toString();

    return `${month} ${year}`;
  };

  getDescription = (): Document | string => {
    const description: Document = this.getField('description');

    if (!description || !description?.content) return '';

    return description;
  };

  getRepositories = (): string[] => {
    const repositories = this.getField('repositories');

    if (!repositories || repositories.length === 0) return [];

    return repositories;
  };

  getSlug = (): string => {
    const slug: string = this.getField('slug');

    if (!slug || typeof slug !== 'string') return '';

    return this.getField('slug');
  };

  getTitle = (): string => {
    const title: string = this.getField('title');

    if (!title || typeof title !== 'string') return '';

    return this.getField('title');
  };

  getType = (): string => {
    const type: string = this.getField('type');

    if (!type || typeof type !== 'string') return '';

    return this.getField('type');
  };

  getUrl = (): string => {
    const url: string = this.getField('url');

    if (!url || typeof url !== 'string') return '';

    return url;
  };

  getImage = (): Asset | null => {
    const image = this.getField('image');

    if (!image) return null;

    return image;
  };

  getSummary = (): string => {
    const summary = this.getField('summary');

    if (!summary) return '';

    return summary;
  };

  getRepositoryLinks = (): ContentfulLink[] => {
    const repositoryLinks = this.getField('repositoryLinks');

    if (!repositoryLinks) {
      return [];
    }

    return repositoryLinks.map((repositoryLink: Entry<ContentfulLink>) => {
      const { title, url, text } = repositoryLink.fields;
      return {
        title,
        url,
        text,
      };
    });
  };
}
