import { Text, Pressable, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../theme";
import useSignIn from "../../hooks/useSignIn";
import authStorage from "../../utils/authStorage";
import FormikTextInput from "../FormikCommon/FormikTextInput";
import useAuthStorage from "../../hooks/useAuthStorage";

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
  password: yup.string().required("Password is required"),
});
const SignInForm = ({ onSubmit }) => {
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
      <Pressable onPress={onSubmit} testID={"buttonSubmit"}>
        <View style={styles.button}>
          <View>
            <Text style={styles.text}>Sign in</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { authenticate } = await signIn({ username, password });

      const storage = useAuthStorage();
      console.log("TOKEN FROM SIGN IN IS " + authenticate.accessToken);
      await storage.setAccessToken(authenticate.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};
export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
