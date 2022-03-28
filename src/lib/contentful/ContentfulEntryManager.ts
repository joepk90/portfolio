import { Entry } from 'contentful';

interface ContentfulEntryManagerInterface<Fields> {

    getFields(): Fields
    getField(key: string): any
}

export abstract class ContentfulEntryManager<Fields> implements ContentfulEntryManagerInterface<Fields> {

    entry: Entry<Fields>

    constructor(entry: Entry<Fields>) {
        this.entry = entry;
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
}