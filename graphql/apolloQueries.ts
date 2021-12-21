//importing utils
import { client } from '../lib';
import {
  advantagesQuery,
  companiesQuery,
  achievementsQuery,
} from './graphqlQueries';

export const advantagesData = client.query({
  query: advantagesQuery,
});

export const companiesData = client.query({
  query: companiesQuery,
});

export const achievementsData = client.query({
  query: achievementsQuery,
});
