import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../graphql/queries";

const useRepositories = () => {
  const [users, setUsers] = useState([]);

  const { error, loading } = useQuery(GET_USERS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      const res = data?.users?.edges.map((edge) => edge.node);
      setUsers(res);
    },
    onError: (e) => console.log(e),
  });

  return { users, loading, error };
};

export default useRepositories;
