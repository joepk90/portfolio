import { createClient, ContentfulClientApi, CreateClientParams } from 'contentful';
import { getContentfullSpaceID, getContentfullAccessToken } from '@lib/utilities/environmentVars';

const clientKeys: CreateClientParams = {
  space: getContentfullSpaceID(),
  accessToken: getContentfullAccessToken(),
};

export const contentfulClient = createClient(clientKeys);
