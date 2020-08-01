import React from 'react';
import renderer from 'react-test-renderer';

import { ForgottenPasswordScreen, sendForgotPassword } from './ForgottenPasswordScreen';
import { forgotPassword } from '../services/authService';
import { useAuthState } from '../contexts/authContext';
jest.mock('../services/authService');
jest.mock('./renderers/ForgottenPasswordScreenRenderer');
jest.mock('../contexts/authContext');

forgotPassword.mockImplementation((email) => {
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

useAuthState.mockImplementation(() => {
    return ({forgottenPasswordError: null});
})

it('renders the Forgotten Password Screen', () => {
    expect(renderer.create(
        <ForgottenPasswordScreen />
    )).toMatchSnapshot();
});


beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    forgotPassword.mockClear();
});


it('calls the forgotPassword function', () => {
    sendForgotPassword("a.b@c.com",()=>{});
    expect(forgotPassword).toHaveBeenCalledTimes(1);
})

it('handles a forgot password error', () => {
    sendForgotPassword(null, ()=>{});
    expect(forgotPassword).toHaveBeenCalledTimes(1);
})