import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import App from './App.jsx'
import './index.css'
import { loadApiToken, loadServer } from 'utils/mediaUtils.js'

// cache policy to merge two data streams for same objectType in gql
const cache = new InMemoryCache({
  typePolicies: {
    Project: {
      merge: true,
    }
  }
});

// headers and uri configuration for apollo client
const link = createHttpLink({
  uri: loadServer("/graphql"),
  headers: {
    Authorization: `bearer ${loadApiToken()}`
  }
})

const apolloClient = new ApolloClient({
  link,
  cache
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
