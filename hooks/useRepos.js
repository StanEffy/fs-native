import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
    onError: (e) => console.log(e),
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        fetchMore: handleFetchMore,
        loading,
        ...variables,
      },
    });
  };

  return { repositories, loading, error, fetchMore: handleFetchMore };
};

export default useRepositories;
