import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
    // Replace the IP address part with your own IP address!
    uri: 'http://192.168.100.10:4000/api/repositories',
});

const createApolloClient = () => {
    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;