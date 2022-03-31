import { createClient, ContentfulClientApi, CreateClientParams } from 'contentful';
import { contentfulAccessToken, contentfulSpaceID } from '@src/config';

const clientKeys: CreateClientParams = {
    space: contentfulSpaceID,
    accessToken: contentfulAccessToken
};

export const contentfulClient = createClient(clientKeys);
