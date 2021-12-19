import { ApolloClient, InMemoryCache } from '@apollo/client';

//apollo client init
export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  cache: new InMemoryCache(),
});
