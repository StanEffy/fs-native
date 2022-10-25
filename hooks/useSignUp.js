import { useApolloClient, useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

import { useNavigate } from "react-router-native";

const useSignUp = () => {
  // const authStorage = useAuthStorage();
  // const navigate = useNavigate();
  // const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(CREATE_USER);
  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    });

    return data;
  };

  return [signUp, result];
};

export default useSignUp;
