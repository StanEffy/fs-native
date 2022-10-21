import { render, fireEvent, waitFor, within } from '@testing-library/react-native';
import {expect, jest} from '@jest/globals';
import {SignInContainer} from "../../components/SignIn/SignIn";
import '@testing-library/jest-native/extend-expect';


describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const mockSubmit = jest.fn();

            const { debug, getByTestId} = render(<SignInContainer onSubmit={mockSubmit} />);

            const formik = getByTestId("formTestId")
            const username = within(formik).getByPlaceholderText("Username")
            const password = within(formik).getByPlaceholderText("Password")
            const button = within(formik).getByTestId("buttonSubmit")

            fireEvent(username, 'onChangeText','Root');
            fireEvent(password, 'onChangeText','pass');


            fireEvent.press(button)
            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(mockSubmit).toHaveBeenCalledTimes(1)
                expect(mockSubmit.mock.calls[0][0]).toEqual({"password": "pass", "username": "Root"})
            });
        });
    });
});