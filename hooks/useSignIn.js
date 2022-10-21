import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(AUTHENTICATE_USER);
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    if (data) {
      await authStorage.setAccessToken(data?.authenticate?.accessToken);
      apolloClient.resetStore();
      navigate("/");
    }

    return data;
  };

  return [signIn, result];
};

export default useSignIn;
