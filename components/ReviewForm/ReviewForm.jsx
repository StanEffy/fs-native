import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import FormikTextInput from "../FormikCommon/FormikTextInput";
import * as yup from "yup";
import theme from "../theme";
import useReview from "../../hooks/useReview";
import { useEffect, useState } from "react";

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
  error: {
    color: "red",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
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
const ReviewForm = ({ onSubmit, setError }) => {
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
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setError(null);
    }, 5000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [error]);
  const handleError = (e) => {
    setError(e);
  };

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try {
      const { data } = await createReview({
        repositoryName,
        ownerName,
        rating,
        text,
        handleError,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} error={error} />;
};
export const ReviewContainer = ({ onSubmit, error }) => {
  return (
    <>
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </>
  );
};

export default Review;
