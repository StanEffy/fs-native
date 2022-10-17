import { Text, TextInput, Pressable, View } from 'react-native';
import { Formik, useField } from 'formik';
import FormikTextInput from "./FormikTextInput";

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({ onSubmit }) => {

    return (
        <View>
            <FormikTextInput
                name={"username"}
                placeholder="Username"

            />
            <FormikTextInput
                name={"password"}
                placeholder="Password"
                secureTextEntry={true}

            />
            <Pressable onPress={onSubmit}>
                <Text>Sign in</Text>
            </Pressable>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;