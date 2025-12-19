import { Asset } from 'contentful';
import { ContentfulEntryManager } from './ContentfulEntryManager';

export interface ContentfulProfileInterface {
  getId(): number;
  getBio(): string;
  getName(): string;
  getImage(): Asset;
  getLocation(): string;
  getEmail(): string;
  getGithubLink(): string;
  getLinkedInLink(): string;
  getCVLink(): string;
}

export type Profile = {
  id: number;
  name: string;
  bio: string;
  image: Asset;
  location: string;
  email: string;
  githubLink: string;
  linkedInLink: string;
  cvLink: string;
};

export class ContentfulProfile
  extends ContentfulEntryManager<Profile>
  implements ContentfulProfileInterface
{
  getId = (): number => {
    return this.getField('id');
  };

  getBio = (): string => {
    return this.getField('bio');
  };

  getName = (): string => {
    return this.getField('name');
  };

  getImage = (): Asset => {
    return this.getField('image');
  };

  getLocation = (): string => {
    return this.getField('location');
  };

  getEmail = (): string => {
    return this.getField('email');
  };

  getGithubLink = (): string => {
    return this.getField('githubLink');
  };

  getLinkedInLink = (): string => {
    return this.getField('linkedInLink');
  };

  getCVLink = (): string => {
    return this.getField('cvLink');
  };
}
