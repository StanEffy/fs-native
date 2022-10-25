import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
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
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_USERS = gql`
  query {
    users {
      edges {
        node {
          username
        }
      }
    }
  }
`;

export const GET_REPO = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
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
`;

export const GET_LOGIN = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const GET_REPO_REVIEWS = gql`
  query Reviews($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId, first: $first, after: $after) {
      id
      fullName
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
