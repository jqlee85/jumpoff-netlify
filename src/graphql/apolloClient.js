import 'cross-fetch/polyfill';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
// import { persistCache } from 'apollo-cache-persist';

// Set up cache.
const cache = new InMemoryCache({
  // // attempting to load from cache before making trip to server
  // dataIdFromObject: object => {
  //   switch (object.__typename) {
  //     case 'Post': return object.slug; // use `slug` as the primary key
  //     case 'Page': return object.uri;
  //     default: return object.id || object._id; // fall back to `id` and `_id` for all other types
  //   }
  // },
  // cacheRedirects: {
  //   Query: { 
  //     postBy: (_, {args}, {getCacheKey} ) => getCacheKey({ 
  //       __typename: 'Post', slug: args.slug
  //     }),
  //     pageBy: (_, {args}, {getCacheKey} ) => getCacheKey({ 
  //       __typename: 'Page', uri: args.uri
  //     })
  //   }
  // },
});

// Persist Cache
// persistCache({
//   cache,
//   storage: window.localStorage,
// });

// Set API Host
const API_HOST =
  process.env.NODE_ENV !== 'production'
    ? 'https://jumpoff.io/graphql'
    : 'https://jumpoff.io/graphql';

// Create Apollo client
const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: API_HOST,
      credentials: 'same-origin'
    })
  ]),
  ssrMode: true,
  cache
});


export default client
