import React from 'react';
import renderer from 'react-test-renderer';

import SignUpScreen from './SignUpScreen';
jest.mock('../contexts/authContext');


it('renders the Sign Up Screen', () => {
    expect(renderer.create(
      <SignUpScreen/>
    )).toMatchSnapshot();
  });