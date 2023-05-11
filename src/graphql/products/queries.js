import {  gql } from '@apollo/client';

export const GET_PRODUCTS= gql`
  query GetProductions {
    productions {
      id
      name
      price     
    }
  }
`;