import {gql} from "@apollo/client";

export const AUTHENTICATE_USER = gql`
mutation Authenticate(
$credentials: AuthenticateInput!
    ) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`
export const CREATE_USER = gql`
    mutation CreateUser(
    $username: String!
    $password: String!)
    {
        createUser(user: { username: $username, password: $password }) {
            id
            username
    }
}
`