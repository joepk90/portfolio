import { ContentfulCollectionManager } from '@lib/contentful/ContentfulCollectionManager';
import { contentfulClient } from '@lib/services/contentful';
import { ContentfulProject, ProjectProps } from '@src/lib/contentful/ContentfulProject';
import { Entry, EntryCollection, TagLink } from 'contentful';

const tagLink: TagLink = {
  sys: {
    type: 'Link',
    linkType: 'Tag',
    id: 'tag',
  },
};

const itemFields = {
  date: '2022-03-02T00:00+01:00',
  description: {
    content: '',
  },
  repositories: ['repo-1', 'repo-2'],
  slug: 'slug',
  title: 'title',
  type: 'type',
  url: 'url',
};

const item = {
  fields: itemFields,
  metadata: {
    tags: [tagLink, tagLink],
  },
};

jest.mock('@lib/services/contentful.ts', () => ({
  contentfulClient: {
    getEntries: jest.fn(() => ({
      items: [item],
    })),
  },
}));

let projectEntry: ContentfulProject;

beforeEach(async () => {
  const projectsResponse: EntryCollection<ProjectProps> = await contentfulClient.getEntries();
  const projects = new ContentfulCollectionManager(projectsResponse);
  const project: Entry<ProjectProps> = projects.getFirstEntry();
  projectEntry = new ContentfulProject(project);
});

describe('ContentfulProject class', () => {
  it('should return the date property when getDate method is called', async () => {
    const dateObject: Date = new Date(itemFields.date);
    const month: string = dateObject.toLocaleString('default', { month: 'long' });
    const year: string = dateObject.getFullYear().toString();
    const date = `${month} ${year}`;
    expect(projectEntry.getDate()).toEqual(date);
  });

  it('should return the description property when getDescription method is called', async () => {
    expect(projectEntry.getDescription()).toEqual(itemFields.description.content);
  });

  it('should return the description property when getDescription method is called', async () => {
    expect(projectEntry.getRepositories()).toHaveLength(2);
  });

  it('should return the slug property when getSlug method is called', async () => {
    expect(projectEntry.getSlug()).toEqual(itemFields.slug);
  });

  it('should return title property when getTitle method is called', async () => {
    expect(projectEntry.getTitle()).toEqual(itemFields.title);
  });

  it('should return the type property when getType method is called', async () => {
    expect(projectEntry.getType()).toEqual(itemFields.type);
  });

  it('should return the url property when getUrl method is called', async () => {
    expect(projectEntry.getUrl()).toEqual(itemFields.url);
  });

  it('should return the tags property when getTags method is called', async () => {
    expect(projectEntry.getTags()).toHaveLength(2);
  });
});
