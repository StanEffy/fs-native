import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState();

  const { error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
    onCompleted: (data) => {
      setRepositories(data.repositories);
    },
    onError: (e) => console.log(e),
  });

  return { repositories, loading, error };
};

export default useRepositories;
