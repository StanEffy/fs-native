import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";
import useSignIn from "../../hooks/useSignIn";
import authStorage from "../../utils/authStorage";
import FormikTextInput from "../FormikCommon/FormikTextInput";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";
import useSignUp from "../../hooks/useSignUp";

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
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Does not match with the password!")
    .required("Required"),
});
const SignUpForm = ({ onSubmit }) => {
  return (
    <View testID={"formTestId"}>
      <FormikTextInput
        name={"username"}
        placeholder="Username"
        testId="username"
        style={styles.field}
      />
      <FormikTextInput
        name={"password"}
        placeholder="Password"
        testId="password"
        secureTextEntry={true}
        style={styles.field}
      />
      <FormikTextInput
        name={"passConfirmation"}
        placeholder="Password confirmation"
        testId="passConfirmation"
        secureTextEntry={true}
        style={styles.field}
      />
      <Pressable onPress={onSubmit} testID={"buttonSubmit"}>
        <View style={styles.button}>
          <View>
            <Text style={styles.text}>Sign up</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signUp({ username, password });
      const res = await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }

    // const [signIn] = useSignIn();
    // const { username, password } = values;
    // try {
    //   const { authenticate } = await signIn({ username, password });
    //
    //   const storage = new authStorage();
    //   await storage.setAccessToken(authenticate.accessToken);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};
export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
