import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import client from './api/apollo.js'
import restLink from './api/rest.js'
import {  ApolloProvider } from '@apollo/client';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ApolloProvider  client={   restLink }>
    <App />
  </ApolloProvider>
  </React.StrictMode>,
)
