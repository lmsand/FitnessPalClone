// import { Slot } from "expo-router"
import { Stack } from "expo-router"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://maguing.stepzen.net/api/brown-quokka/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization:
    "apikey maguing::stepzen.io+1000::6266b500b95dadbb3e5798238e7d66ed887265617387d2772aab3fd8f8181c68"
  }
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
      {/* stack contains all screens in app */}
    </ApolloProvider>
  )
}

export default RootLayout
