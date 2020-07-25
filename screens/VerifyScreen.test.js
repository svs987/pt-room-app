import React from 'react';
import renderer from 'react-test-renderer';

import VerifyScreen from './VerifyScreen';
jest.mock('../contexts/authContext');


it('renders the Sign Up Screen', () => {
    expect(renderer.create(
      <VerifyScreen/>
    )).toMatchSnapshot();
  });