import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './queries';




export default function DisplayProductions() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.products.map(({ id, name, price }) => (
    <div key={id}>
      <h3>{name}</h3>      
      <br />
      <b>Price:</b><p>{ price }</p>
      <br />
    </div>
  ));
}
