import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query repositories{
    repositories {
      edges {
        node {
            id
            ownerName
            description
            name
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            url
            ownerAvatarUrl
            language
            fullName
        }
      }
    }
  }
`;