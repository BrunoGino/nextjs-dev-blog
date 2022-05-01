import { Client } from '@prismicio/client';
import {
  createClient,
  getRepositoryName,
  HttpRequestLike,
} from '@prismicio/client';
import sm from '../../sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = getRepositoryName(endpoint);

export function getPrismicClient(config?: {
  previewData: any;
  req?: HttpRequestLike;
}): Client {
  const client = createClient(endpoint, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  // enableAutoPreviews({
  //     client,
  //     previewData: config.previewData,
  //     req: config.req
  // });

  return client;
}
