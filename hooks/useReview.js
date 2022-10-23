import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

import { useNavigate } from "react-router-native";

const useReview = () => {
  const navigate = useNavigate();

  const [mutate, result] = useMutation(CREATE_REVIEW);
  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    console.log(repositoryName, ownerName, rating, text);
    const { data } = await mutate({
      onError: (e) => console.log(e),
      variables: {
        review: {
          repositoryName,
          ownerName,
          rating: parseInt(rating),
          text,
        },
      },
    });
    if (data) {
      navigate("/");
    }

    return data;
  };
  return [createReview, result];
};

export default useReview;
