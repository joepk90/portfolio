import { createClient, ContentfulClientApi, CreateClientParams } from 'contentful';

const clientKeys: CreateClientParams = {
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

export const contentfulClient = createClient(clientKeys);
