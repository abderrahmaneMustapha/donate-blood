import { ApolloClient, InMemoryCache, ApolloLink,  createHttpLink} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
///import { onError } from "apollo-link-error";
//import { ApolloLink, Observable } from 'apollo-link';

const httpLink = createHttpLink({
  uri: `${window.location.protocol}//${
      window.location.hostname === "localhost"
          ? window.location.hostname + ":8000"
          : window.location.hostname
  }/graphql/`,
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = localStorage.getItem("jwt");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? "JWT " + token : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
