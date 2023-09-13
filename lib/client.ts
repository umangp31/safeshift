import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: 'https://api-mumbai.lens.dev/',
  fetch,
});

const lensClient = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

export default lensClient;