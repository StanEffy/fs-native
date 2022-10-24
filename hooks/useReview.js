import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

import { useNavigate } from "react-router-native";

const useReview = () => {
  const navigate = useNavigate();

  const [mutate, result] = useMutation(CREATE_REVIEW);
  const createReview = async ({
    repositoryName,
    ownerName,
    rating,
    text,
    handleError,
  }) => {
    const { data } = await mutate({
      onError: (e) => handleError(e.toString()),
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
      navigate(`/${data.createReview.repositoryId}`);
    }

    return data;
  };
  return [createReview, result];
};

export default useReview;
