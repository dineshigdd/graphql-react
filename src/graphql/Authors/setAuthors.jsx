import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SET_AUTHORS } from './mutations'
import { useRef } from 'react';



export default function SetAuthors() {
  
  const [ addAuthor , { data, loading, error }] = useMutation( SET_AUTHORS );
  const nameRef = useRef( null);
  const ageRef  = useRef( null);  
//   const [ state, const [first, setfirst] = useState(second)]

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  
  const handleSubmit = (e) => {
    e.preventDefault();
       
    addAuthor(  { 
                    variables: { 
                        name: nameRef.current.value,
                        age: Number( ageRef.current.value )
            }} );
    
  }
  
  return(
    <>
        <form onSubmit={ handleSubmit }>
                <label>name <input ref={ nameRef } /></label>
                <label>age  <input ref={ ageRef } /></label>

                <button type="submit">Add</button>
              
        </form>
    </>
  )
}