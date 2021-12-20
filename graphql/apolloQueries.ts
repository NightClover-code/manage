//importing utils
import { client } from '../lib';
import { advantagesQuery, companiesQuery } from './graphqlQueries';

export const advantagesData = client.query({
  query: advantagesQuery,
});

export const companiesData = client.query({
  query: companiesQuery,
});
