import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App.jsx'
import './index.css'

const cache = new InMemoryCache({
  typePolicies: {
    Project: {
      merge: true,
    }
  }
});

const apolloClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
