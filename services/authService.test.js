import { forgotPassword } from '../services/authService';
jest.mock('aws-amplify');

it ('calls the forgot password function', async () => {
    await forgotPassword('a.b.com');
})