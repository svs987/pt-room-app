import React from 'react';
import renderer from 'react-test-renderer';

import { VerifyScreen, resendCode } from './VerifyScreen';
import { resendSignUp } from '../services/authService';
jest.mock('../contexts/authContext');
jest.mock('../services/authService');


it('renders the Sign Up Screen', () => {
    expect(renderer.create(
      <VerifyScreen/>
    )).toMatchSnapshot();
  });

  it('calls the resendSignUp method', async () => {
    await resendCode('a.b@c.com', () => {}, () => {});
    expect(resendSignUp).toHaveBeenCalledTimes(1);
  });
