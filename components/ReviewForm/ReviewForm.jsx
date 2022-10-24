import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "../FormikCommon/FormikTextInput";
import * as yup from "yup";
import theme from "../theme";
import useReview from "../../hooks/useReview";

const styles = StyleSheet.create({
  field: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 5,
    marginHorizontal: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    fontWeight: "bold",
  },
  text: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: 0,
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
  text: yup.string().required("Review is required"),
});
const ReviewForm = ({ onSubmit }) => {
  return (
    <View testID={"formTestId"}>
      <FormikTextInput
        name={"ownerName"}
        placeholder="Repository owner name"
        testId="ownerName"
        style={styles.field}
      />
      <FormikTextInput
        name={"repositoryName"}
        placeholder="Repository name"
        testId="repositoryName"
        style={styles.field}
      />
      <FormikTextInput
        name={"rating"}
        placeholder="Rating between 0 and 100"
        testId="rating"
        style={styles.field}
        keyboardType="numeric"
      />
      <FormikTextInput
        name={"text"}
        placeholder="Review"
        testId="text"
        style={styles.field}
        multiline
        numberOfLines={3}
      />
      <Pressable onPress={onSubmit} testID={"buttonSubmit"}>
        <View style={styles.button}>
          <Text style={styles.text}>Create a review</Text>
        </View>
      </Pressable>
    </View>
  );
};

const Review = () => {
  const [createReview] = useReview();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating,
        text,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};
export const ReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Review;
