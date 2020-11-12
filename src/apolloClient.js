import { ApolloClient, InMemoryCache} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
///import { onError } from "apollo-link-error";
//import { ApolloLink, Observable } from 'apollo-link';


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
  link: authLink,
  cache: new InMemoryCache(),
});
