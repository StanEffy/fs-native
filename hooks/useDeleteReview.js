import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { GET_LOGIN } from "../graphql/queries";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: GET_LOGIN }, "Me"],
  });

  const deleteReview = async (id) => {
    console.log(id);
    await mutate({ variables: { id } });
  };

  return [deleteReview, result];
};

export default useDeleteReview;
