import { Asset } from 'contentful';
import { ContentfulEntryManager } from '@src/lib/contentful/ContentfulEntryManager';

export interface ContentfulProfileInterface {
    getId(): number
    getBio(): string
    getName(): string
    getImage(): Asset
}

export type Profile = {
    id: number
    name: string
    bio: string
    image: Asset
}

export class ContentfulProfile extends ContentfulEntryManager<Profile> implements ContentfulProfileInterface {

    getId = (): number => {
        return this.getField('id')
    }

    getBio = (): string => {
        return this.getField('bio')
    }

    getName = (): string => {
        return this.getField('name')
    }

    getImage = (): Asset => {
        return this.getField('image')
    }
}