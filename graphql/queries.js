import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query repositories {
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
  query {
    repository(id: "jaredpalmer.formik") {
      id
      fullName
      url
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
