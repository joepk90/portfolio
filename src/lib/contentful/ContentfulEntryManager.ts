import { Entry, TagLink, Metadata } from 'contentful';

interface ContentfulEntryManagerInterface<Fields> {

    getFields(): Fields
    getField(key: string): any
    getMetadata(): Metadata | null
    getTagLinks(): TagLink[]
    getTags(key: string): string[]
}

export abstract class ContentfulEntryManager<Fields> implements ContentfulEntryManagerInterface<Fields> {

    entry: Entry<Fields>
    tags: string[]

    constructor(entry: Entry<Fields>) {
        this.entry = entry;
        this.tags = this.getTags()
    }

    getFields = (): Fields => {
        return this.entry.fields;
    }

    getField = (key: string): any => {
        const fields: Fields = this.getFields();
        return fields[key]; // TODO: Fix returned dynamic type issue
    }

    // TODO assign the correct generic type to the getField methods return value
    //   getField = <T extends Fields[keyof Fields]>(key: keyof Fields): T => {
    //     const fields: Fields = this.getFields();
    //     return fields[key];
    // }

    getMetadata = (): Metadata | null => {

        const metadata = this.entry?.metadata ? this.entry.metadata : undefined;

        if (metadata === undefined) return null

        return metadata
    }

    getTagLinks = (): TagLink[] => {

        const metadata = this.getMetadata();

        if (metadata === null) return [];
        if ('tags' in metadata === false) return [];
        if (Array.isArray(metadata.tags) === false) return [];

        return metadata.tags;
    }

    getTags = (): string[] => {

        const tagLinks = this.getTagLinks();

        if (tagLinks.length === 0) return [];

        const tags: string[] = [];
        tagLinks.map((tag) => {
            if ('sys' in tag === false) return;
            if ('id' in tag.sys === false) return;
            tags.push(tag.sys.id);
        })

        return tags;
    }
}