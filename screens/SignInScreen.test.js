import React from 'react';
import renderer from 'react-test-renderer';

import SignInScreen from './SignInScreen';
jest.mock('../contexts/authContext');


it('renders the Sign In Screen', () => {
    expect(renderer.create(
      <SignInScreen
        navigation={{
          navigate: ()=>{},

        }}/>
    )).toMatchSnapshot();
  });