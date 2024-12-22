import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pwa-backend-0szx.onrender.com/api',
  cache: new InMemoryCache(),
});

export default client;