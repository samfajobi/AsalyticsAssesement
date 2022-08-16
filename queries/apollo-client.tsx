import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://analytics-api.herokuapp.com/analytics",
    cache: new InMemoryCache(),
});

export default client;