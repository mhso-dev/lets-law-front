// import ApolloClient from "apollo-boost";
// import { defaults, resolvers } from "./LocalState";
// export default new ApolloClient({
//   uri: "http://localhost:4000",
//   clientState: {
//     defaults,
//     resolvers
//   }
// });
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { defaults, resolvers } from "./LocalState";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
// Instantiate required constructor fields
const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  defaults,
  resolvers
});

const link = new HttpLink({
  uri: "http://localhost:4000/"
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

export default new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: ApolloLink.from([stateLink, authLink.concat(link)]),

  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first"
    }
  }
});
