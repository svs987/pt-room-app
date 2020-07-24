import React from 'react';
import renderer from 'react-test-renderer';

import SignUpScreenRenderer from './SignUpScreenRenderer';


it('renders the Signup Screen', () => {
    expect(renderer.create(
      <SignUpScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signed={false}
        signUpUser={()=>{}} />
    )).toMatchSnapshot();
  });

  it('renders the Verify Screen', () => {
    expect(renderer.create(
      <SignUpScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signed={true}
        signUpUser={()=>{}} />
    )).toMatchSnapshot();
  });