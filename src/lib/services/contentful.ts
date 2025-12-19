import { getContentfullAccessToken, getContentfullSpaceID } from '@lib/utilities/environmentVars';
import { createClient, CreateClientParams } from 'contentful';

const clientKeys: CreateClientParams = {
  space: getContentfullSpaceID(),
  accessToken: getContentfullAccessToken(),
};

export const contentfulClient = createClient(clientKeys);
