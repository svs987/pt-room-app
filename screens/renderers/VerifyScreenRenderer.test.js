import React from 'react';
import renderer from 'react-test-renderer';

import VerifyScreenRenderer from './VerifyScreenRenderer';


  it('renders the Verify Screen', () => {
    expect(renderer.create(
      <VerifyScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signUpUser={()=>{}} />
    )).toMatchSnapshot();
  });