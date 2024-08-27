import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.9:5001/graphql',
});

const graphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default graphqlClient;