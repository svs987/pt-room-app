import React from 'react';
import renderer from 'react-test-renderer';

import { ChangePasswordScreen, sendChangePassword } from './ChangePasswordScreen';
import { forgotPasswordSubmit } from '../services/authService';
import { useAuthState } from '../contexts/authContext';

jest.mock('../contexts/authContext');


jest.mock('./renderers/ForgottenPasswordScreenRenderer');
jest.mock('../services/authService');


beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    forgotPasswordSubmit.mockClear();
});



forgotPasswordSubmit.mockImplementation((email) => {
    if (email) {
        return new Promise((resolve, reject) => {
            resolve(null);
        }
        );
    } else {
        return new Promise((resolve, reject) => {
            reject({ message: 'Error' });
        }
        );

    }
});



it('renders the Forgotten Password Screen', () => {
    expect(renderer.create(
        <ChangePasswordScreen />
    )).toMatchSnapshot();
});



it('calls the sendChangePassword function', () => {
    sendChangePassword("a.b@c.com","12345","67890");
    expect(forgotPasswordSubmit).toHaveBeenCalledTimes(1);
})

it('handles a forgot password error', () => {
    sendChangePassword(null,"12345","67890");
    expect(forgotPasswordSubmit).toHaveBeenCalledTimes(1);
})