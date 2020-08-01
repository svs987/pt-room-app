import { authReducer } from './authReducer';

test('sets verifying state', () => {
    expect(authReducer({}, {
        type: 'VERIFYING',
        email: 'The email',
        password: 'pa55w0rd'
    })).toEqual({
        isVerifying: true,
        isRequestingNewPassword: false,
        isSignout: true,
        userToken: null,
        userName: null,
        email: 'The email',
        password: 'pa55w0rd'
    });
});

test('sets sign in state', () => {
    expect(authReducer({}, {
        type: 'SIGN_IN',
        token: 'abcde',
        userName: 'userName',
    })).toEqual({
        isVerifying: false,
        isSignout: false,
        isRequestingNewPassword: false,
        userToken: 'abcde',
        userName: 'userName',
    });
});

test('sets sign out state', () => {
    expect(authReducer({}, {
        type: 'SIGN_OUT',
    })).toEqual({
        isVerifying: false,
        isSignout: true,
        isRequestingNewPassword: false,
        userToken: null,
        userName: null,
        email: null,
        password: null
    });
});

test('sets reset password state', () => {
    expect(authReducer({}, {
        type: 'RESET_PASSWORD',
        email: 'a.b@c.com'
    })).toEqual({
        isVerifying: false,
        isSignout: true,
        isRequestingNewPassword: true,
        userToken: null,
        userName: null,
        email: "a.b@c.com",
        password: null
    });
});