import { getContentfullAccessToken, getContentfullSpaceID } from '@lib';
import { createClient, CreateClientParams } from 'contentful';

let contentfulClientInstance: ReturnType<typeof createClient> | null = null;

const getContentfulClient = () => {
  if (!contentfulClientInstance) {
    const clientKeys: CreateClientParams = {
      space: getContentfullSpaceID(),
      accessToken: getContentfullAccessToken(),
    };
    contentfulClientInstance = createClient(clientKeys);
  }
  return contentfulClientInstance;
};

// Lazy initialization: only create client when first accessed
export const contentfulClient = new Proxy({} as ReturnType<typeof createClient>, {
  get(_target, prop) {
    const client = getContentfulClient();
    const value = client[prop as keyof ReturnType<typeof createClient>];
    return typeof value === 'function' ? value.bind(client) : value;
  },
});
