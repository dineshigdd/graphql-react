import { RestLink } from 'apollo-link-rest';
import { ApolloClient,InMemoryCache } from '@apollo/client';


const restLink = new RestLink({
    uri: 'https://api.tvmaze.com/',
  });

  const restClient = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
  });

export default restClient