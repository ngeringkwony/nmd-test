import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BASE_URL } from '../constants';

const httpLink = createHttpLink({
  uri: BASE_URL + '/graphql',
});

const graphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default graphqlClient;