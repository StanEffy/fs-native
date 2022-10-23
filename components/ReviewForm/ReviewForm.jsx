import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "../FormikCommon/FormikTextInput";
import * as yup from "yup";
import theme from "../theme";
import useSignIn from "../../hooks/useSignIn";
import authStorage from "../../utils/authStorage";

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
  repoName: "",
  rating: 0,
  review: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required"),
  repoName: yup.string().required("Repository name is required"),
  rating: yup.number().min(0).max(100).required("Rating is required"),
  review: yup.string().required("Review is required"),
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
        name={"repoName"}
        placeholder="Repository name"
        testId="repoName"
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
        name={"review"}
        placeholder="Review"
        testId="review"
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
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      // const { authenticate } = await signIn({ username, password });
      //
      // const storage = new authStorage();
      // await storage.setAccessToken(authenticate.accessToken);
      console.log(values);
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
