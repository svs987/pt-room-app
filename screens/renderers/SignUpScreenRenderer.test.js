import React from 'react';
import renderer from 'react-test-renderer';

import SignUpScreenRenderer from './SignUpScreenRenderer';


it('renders the Signup Screen', () => {
    expect(renderer.create(
      <SignUpScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signUpUser={()=>{}} />
    )).toMatchSnapshot();
  });

  it('renders the Signup Screen with an error', () => {
    expect(renderer.create(
      <SignUpScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signUpUser={()=>{}}
        signUpError="Error!" />
    )).toMatchSnapshot();
  });
