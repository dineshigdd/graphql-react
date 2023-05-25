import { ApolloClient , InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri:'http://localhost:4000/',
  //uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default client;
