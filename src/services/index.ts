import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.jsmein.kz/graphql',
  cache: new InMemoryCache(),
})
