import {  gql } from '@apollo/client';

export const SET_AUTHORS =  gql`
    mutation CreateAuthor($name: String!, $age:Int ){
        createAuthor(name: $name,age : $age ) {
        name
        age
        }
    }
    `;