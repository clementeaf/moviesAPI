/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

const localGraphQL = 'http://localhost:4000/graphql';

const link = createHttpLink({
  uri: localGraphQL,
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
