import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './client'

const ApolloWrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
export default ApolloWrapRootElement