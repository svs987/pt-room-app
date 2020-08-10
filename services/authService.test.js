import { forgotPassword, forgotPasswordSubmit, resendSignUp } from '../services/authService';
import {Auth} from 'aws-amplify';

jest.mock('aws-amplify');

it ('calls the forgot password function', async () => {
    await forgotPassword('a.b.com');
    expect(Auth.forgotPassword).toHaveBeenCalledTimes(1);
});

it ('calls the forgot password submit', async () => {
    await forgotPasswordSubmit('a.b@c.com','12345','pa55wr0d');
    expect(Auth.forgotPasswordSubmit).toHaveBeenCalledTimes(1);
})

it ('calls the resend Confirmation Code', async () => {
    await resendSignUp('a.b@c.com');
    expect(Auth.resendSignUp).toHaveBeenCalledTimes(1);
})