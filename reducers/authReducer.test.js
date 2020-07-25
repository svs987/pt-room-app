import { authReducer } from './authReducer';

test('sets verifying state', () => {
    expect(authReducer({}, {
        type: 'VERIFYING',
        email: 'The email',
        password: 'pa55w0rd'
    })).toEqual({
        isVerifying: true,
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
        userToken: null,
        userName: null,
        email: null,
        password: null
    });
});