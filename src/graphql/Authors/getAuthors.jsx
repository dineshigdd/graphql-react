import React from 'react';
import { useQuery, useMutation} from '@apollo/client';
import { GET_AUTHORS } from './queries';



export default function DisplayAuthors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  return data.authors.map(({ id, name , age  }) => (
    <ul key={id}>      
      <li>{ name } , { age }</li>
      <br />
    </ul>
  ));
}